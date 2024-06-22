<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="text-center loading">
    <b-spinner label="Spinning"></b-spinner>
  </div>
</template>
<style scoped lang="scss">
.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99999;
  padding-top: 20%;
  background: #f0f0f0 !important;
  color: rgb(0, 16, 99);
  span {
    width: 40px;
    height: 40px;
    color: #cf6666;
  }
}
</style>
