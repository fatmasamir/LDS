<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { defineProps, ref } from "vue";
// props
let props = defineProps(["Links"]);
// i18n
const { t } = useI18n();

//Login
const Login = ref();
</script>

<template>
  <div class="website">
    <div>
      <div class="navbar-nav">
        <ul class="list_links">
          <li v-for="link in props.Links" :key="link.id">
            <router-link
              :to="link.path"
              class="nav-link"
              :class="link.id == 0 ? 'active' : ''"
            >
              {{ t(link.title) }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div
      class="navbar-btns navbar-btns-icons navbar-btns-icons-authonticaTION d-flex align-items-center"
    >
      <ul>
        <li><button to="/">+ Sample Collection</button></li>
        <li><router-link to="/">New Ract</router-link></li>
      </ul>
      <div class="address">
        <button
          type="button"
          class="Naser-button"
          id="page-header-notifications-dropdown"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Naser city Branch
          <img src="@/assets/images/down-arrow-svgrepo-com.svg" />
        </button>
        <div
          class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
          aria-labelledby="page-header-notifications-dropdown"
          data-popper-placement="bottom-end"
        >
          <ul>
            <li>Active</li>
            <li>Active</li>
            <li>Active</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "./NavbarStyling.scss";
.navbar .navbar-btns-icons .info-login {
  margin-right: 25px;
  .profile_link img,
  .notification,
  .messages {
    border: 2px solid #f4a71d;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: transparent;
  }
  .notification,
  .messages {
    border: 2px solid #313131;
    margin-left: 15px;
  }
}
.navbar ul.list_links {
  margin: 0px;
  gap: 20px;
}
.navbar-btns {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  ul {
    display: flex;
    margin: 0px;
    align-items: center;
    padding: 0px;
    gap: 20px;
    justify-content: space-between;
    li a,
    li button {
      color: black !important;
      font-weight: 700 !important;
      border: 0px;
      background: transparent;
      font-weight: 700;
    }
  }
  .address {
    .Naser-button {
      color: hsl(349.09deg 100% 89.22%) !important;
      font-size: 13px;
      background: transparent;
      border: 0px;
      img {
        width: 13px;
        height: 13px;
      }
    }
    .dropdown-menu {
      position: absolute;
      inset: 0px 0px auto auto;
      margin: 0px;
      transform: translate3d(-33.2px, 27.4px, 0px);
      ul {
        display: block;
        li {
          padding: 10px;
          border-bottom: 1px solid #f0eceb;
          &:last-child {
            border-bottom: 0px;
          }
        }
      }
    }
  }
}
</style>
