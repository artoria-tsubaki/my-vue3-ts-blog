<script setup lang="ts">
import { onMounted } from 'vue'
import service from '../utils/https'
import Main from '../viewComponents/Main.vue';

onMounted(async () => {
  const data = await service.get('/')
  console.log(data)
})
</script>

<template>
  <Main>
    
  </Main>
</template>

<style scoped></style>
