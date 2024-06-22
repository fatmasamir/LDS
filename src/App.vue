<script setup lang="ts">
import { onMounted, ref } from "@vue/runtime-core";
import LoadingSpinner from "./components/global/Loading/index.vue";
import Layout from "@/Layout/default.vue";

//loading
const loading = ref(true);

//onMounted
onMounted(() => {
  //setTimeout
  setTimeout(function () {
    loading.value = false;
  }, 1000);
});
</script>
<template>
  <div class="app">
    <!--Loading-->
    <LoadingSpinner v-if="loading" />
    <!--scrollTop-->
    <div class="scrollTop"><a href="#"></a></div>
    <!--Layout-->
    <Layout />
  </div>
</template>
