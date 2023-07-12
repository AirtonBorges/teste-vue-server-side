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

<script setup>
import { ref } from 'vue'

const produtos = ref([
  { 
    id: 1,
    produto: 'Brinco peixe',
    preco: 15,
    imagem: 'https://raw.githubusercontent.com/AirtonBorges/loja-brincos/main/loja-brincos/src/assets/imagem-peixe.jpg'
  },
  { 
    id: 2,
    produto: 'Brinco pirulito',
    preco: 20,
    imagem: 'https://raw.githubusercontent.com/AirtonBorges/loja-brincos/main/loja-brincos/src/assets/imagem-pirulito.jpg'
  },
  { 
    id: 3,
    produto: 'Brinco tanjiro',
    preco: 15,
    imagem: 'https://raw.githubusercontent.com/AirtonBorges/loja-brincos/main/loja-brincos/src/assets/imagem-tanjiro.jpg'
  },
  {
    id: 4,
    produto: 'Brinco pato',
    preco: 15,
    imagem: 'https://raw.githubusercontent.com/AirtonBorges/loja-brincos/main/loja-brincos/src/assets/imagem-pato.jpg'
  },
  { 
    id: 5,
    produto: 'Brinco sorvete',
    preco: 20,
    imagem: 'https://raw.githubusercontent.com/AirtonBorges/loja-brincos/main/loja-brincos/src/assets/brinco-sorvete.jpg'
  },
  { 
    id: 6,
    produto: 'Brinco chocolate',
    preco: 15,
    imagem: 'https://raw.githubusercontent.com/AirtonBorges/loja-brincos/main/loja-brincos/src/assets/imagem-chocolate.jpg'
  }
])
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