<template>
  <div class="container">
    <el-row :gutter="22.5">
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <Card></Card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <Card></Card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
        <Card></Card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
import Card from "../components/Card.vue";
</script>

<style scoped>
</style>