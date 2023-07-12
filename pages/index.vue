<template>
     <v-app>
    <BarraNavegacao @clicou-tab="(mudarJanela)"></BarraNavegacao>
    <v-window id="window" v-model="tab">
      <v-window-item value="0" key="0">
        <Produtos></Produtos>
      </v-window-item>
      <v-window-item value="1" key="1">
        <Personalizado></Personalizado>
      </v-window-item>
    </v-window>
  </v-app>
</template>

<script lang="ts">
export default {
  data: () => ({
    tab: 1,
  }),
  methods: {
    mudarJanela(tab: number) {
      this.tab = tab;
    }
  },
  mounted() {
    this.mudarJanela(0);
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
  #window {
    margin-top: 65px;
  }
</style>