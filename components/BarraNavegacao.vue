<template>
    <v-app-bar 
      id="barra"
      v-resize="onResize"
      flat
      color="red-darken-3"
      class="d-flex justify-space-between"
    >
      <img
        id="logo"
        width="150"
        src="~/assets/LOJA_BRANCA_HORIZ.webp"
      />
      <v-spacer></v-spacer>
      <v-expand-transition>
        <v-tabs
          v-if="!barraColapsada"
          v-model="tab"
        >
            <v-tab v-for="link in links"
                :key="link.title"
                :value="link.value"
                @click="$emit('clicouTab', tab)"
            >
                {{link.title}}
            </v-tab>
        </v-tabs>
      </v-expand-transition>
    <div
      id="icones"
      class="d-flex justify-space-between align-center"
    >
      <v-btn :href="linkZap" size="x-large" density="compact" icon="mdi-whatsapp"></v-btn>
      <v-btn :href="linkInstagram" size="x-large" density="compact" icon="mdi-instagram"></v-btn>
      <v-expand-transition>
        <v-app-bar-nav-icon
          class="icone"
          icon="mdi-dots-vertical"
          v-if="barraColapsada"
          @click.stop="gavetaAberta = !gavetaAberta"
        >
        </v-app-bar-nav-icon>
      </v-expand-transition>
    </div>
    </v-app-bar>
    <v-navigation-drawer
        v-model="gavetaAberta"
        location="right"
        temporary
      >
      <v-tabs
          v-model="tab"
          direction="vertical"
        >
            <v-tab v-for="link in links"
                :key="link.title"
                :value="link.value"
                @click="$emit('clicouTab', tab)"
            >
                {{link.title}}
            </v-tab>
        </v-tabs>
      </v-navigation-drawer>
</template>

<script lang="ts">
import 'dotenv';
export default {
  emits: ['clicouTab'],
  setup(props, { emit }) {
    emit('clicouTab', props.onClicouTab) // <-- type check / auto-completion
  },
  data: () => ({
    tab: null,
    linkZap: `${process.env.WHATSAPP}`,
    linkInstagram: `${process.env.INSTAGRAM}`,
    barraColapsada: false,
    gavetaAberta: false,
    links: [
        { title: 'PRODUTOS', value: 0},
        { title: 'PERSONALIZACAO', value: 1}
    ]
  }),
  methods: {
    onResize(){
      this.barraColapsada = window.innerWidth < 768;
      if(!this.barraColapsada && this.gavetaAberta) {
        this.gavetaAberta = false;
      }
    }
  },
}
</script>

<style scoped>
  #logo {
    margin-left: 35px;
  }
  #barra {
    padding: 0 10px;
  }
</style>