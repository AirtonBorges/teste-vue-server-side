<template>
  <v-layout
    style="padding: 5vh 0"
    class="d-flex align-center justify-center"
  >
    <v-card
      class="mx-auto"
      width="90%"
      max-width="700"
      color="white"
    >
      <v-img
        src="https://raw.githubusercontent.com/AirtonBorges/loja-brincos/main/loja-brincos/src/assets/LOGO_ROSTO.png"
        height="200px"
      ></v-img>
      <v-card-title> Peça seu brinco personalizado! </v-card-title>

      <v-card-text style="padding-bottom: 10px;">
        Após preencher esse formulário você será direcionado ao meu
        WhatsApp onde poderá enviar mais informações e imagens do seu pedido
      </v-card-text>
        <form @submit.prevent="submit">
          <v-text-field
            v-model="nome.value.value"
            :counter="10"
            :error-messages="nome.errorMessage.value"
            label="Nome"
          ></v-text-field>

          <v-text-field
            v-model="cidade.value.value"
            :counter="3"
            :error-messages="cidade.errorMessage.value"
            label="Cidade"
          ></v-text-field>

          <v-textarea v-model="descricao.value.value" label="Qual a sua ideia de brinco?"></v-textarea>

          <v-btn
            color="red-darken-3"
            width="100%"
            type="submit"
          >
            Enviar
          </v-btn>
      </form>
    </v-card>    
  </v-layout>
</template>
<script setup>
  import { useField, useForm } from 'vee-validate';
  const { handleSubmit } = useForm({
    validationSchema: {
      nome(value) {
        if (value?.length >= 2) return true

        return 'mínimo de 2 caractéres'
      },
      cidade(value) {
        if (value?.length >= 3) return true

        return 'mínimo 3 caractéres'
      }
    },
  })
  const nome = useField('nome')
  const cidade = useField('cidade')
  const descricao = useField('descricao')

  const submit = handleSubmit(() => {
    const texto = `${nome.value.value}, de ${cidade.value.value}: ${descricao.value.value}`
    window.location.href = `https://wa.me//47988610641?text=${texto}`;
  })
</script>

<style scoped>
</style>