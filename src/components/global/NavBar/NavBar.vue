<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import type { Link } from "./interface";
import { useI18n } from "vue-i18n";
// import { useLang } from "@/stores/lang";
// import router from "@/router";
import Mobile from "./Mobile.vue";
import Website from "./website.vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

// i18n
// const { t } = useI18n();

// auth store
const authStore = useAuthStore();

// router
const router = useRouter();
const i18n = useI18n();

// showMobileList
const showMobileList = ref<boolean>(false);
// profileLinks
let Links = ref<Link[]>([
  {
    id: 0,
    path: "/",
    title: "Dashboard",
  },
  {
    id: 1,
    path: "/jop-order-list",
    title: "Jop Order List",
  },
  {
    id: 2,
    path: "/Sample-to-rack",
    title: "Sample to Rack",
  },
  {
    id: 3,
    path: "/transport",
    title: "Transport",
  },
  {
    id: 4,
    path: "/dispatch-list",
    title: "Dispatch List",
  },
  {
    id: 5,
    path: "/reports",
    title: "Reports",
  },
]);
// handel changeshowMobile
let changeshowMobile = () => {
  console.log("changeshowMobile");
  showMobileList.value = false;
};

//Logout
// const Logout = () => {
//   authStore.logOut();
//   router.push("/login");
// };
</script>

<template>
  <!-- Nav -->
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <Website @Logout="Logout" :Links="Links" />
      <button
        class="navbar-toggler"
        type="button"
        @click="showMobileList = !showMobileList"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <Mobile
        :class="showMobileList ? 'show' : ''"
        :Links="Links"
        @changeshowMobile="changeshowMobile()"
      />
    </div>
  </nav>
</template>
<style scoped lang="scss">
nav {
  background: white;
  color: black;
  margin-bottom: 5px;
  padding: 0px !important;
  height: 30px;
  .container {
    margin-right: 0px;
    max-width: 93%;
  }
}
@media (max-width: 1400px) {
  nav .container {
    max-width: 100% !important;
  }
}
</style>
