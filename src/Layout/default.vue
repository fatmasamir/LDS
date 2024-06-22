<script setup>
import NavBar from "@/components/global/NavBar/NavBar.vue";
import TopNavbar from "@/components/global/NavBar/TopNavbar.vue";
</script>
<template>
  <div class="layout-body">
    <TopNavbar></TopNavbar>
    <!-- <NavBar /> -->
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
  <div class="layout-footer text-center">
    <span>Copy Right @ 2024 LDS,Designed by LDS Co. All righta reserved</span>
  </div>
</template>
<style scoped lang="scss">
.layout-body {
  background: hsl(12deg 14.29% 93.14%);
  padding-bottom: 20px;
}
.layout-footer span {
  font-size: 13px;
  color: hsl(0deg 0% 49.41%);
}
</style>
