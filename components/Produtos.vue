<template>
     <v-carousel
        cycle
        hide-delimiters
        height="fit-content"
        hide-delimiter-background
        show-arrows="hover"
      >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        cover
      >
        <v-img
          cover
          :src="slide.imagem"
        >
        </v-img>
      </v-carousel-item>
     </v-carousel>
    <v-layout
        id="layout"
        style="padding: 5vh"
    >
        <CardProduto v-for="item in produtos"
            :key="item.id"
            :produto="item.produto"
            :preco="item.preco"
            :imagem="item.imagem"
        ></CardProduto>
    </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { obterProdutos, IItem } from '@/composables/useGoogleSheets'

const produtos = ref<IItem[]>(await obterProdutos());

const slides = ref([
  {
    imagem: 'https://raw.githubusercontent.com/AirtonBorges/loja-brincos/main/loja-brincos/src/assets/banner-1.png'
  }
])
</script>

<style scoped>
    #layout {
        display: grid;
        gap: 1rem;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
    }
</style>