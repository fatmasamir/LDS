<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { defineProps } from "vue";

// props
let props = defineProps(["Links"]);

// //Login
// const Login = localStorage.getItem("access_token");

// emit;
let emit = defineEmits(["changeshowMobile"]);
// i18n
const { t } = useI18n();

const showMobile = () => {
  emit("changeshowMobile");
};
</script>

<template>
  <div class="mobile pb-5">
    <div class="mobile_sec">
      <div class="close">
        <button class="navbar-toggler" type="button" @click="showMobile()">
          X
        </button>
      </div>
      <div>
        <div class="navbar-nav">
          <ul class="list_links">
            <li v-for="link in props.Links" :key="link.id">
              <router-link
                :to="link.path"
                class="nav-link"
                :class="link.id == 0 ? 'active' : ''"
                href="#aboutUs"
              >
                {{ t(link.title) }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-btns">
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
      <div class="features-profile-mobile mt-3">
        <div class="search col-md-8">
          <input type="text" placeholder="Search" />
          <span><img src="@/assets/images/search-alt-svgrepo-com.svg" /></span>
        </div>
        <div class="content">
          <div class="">
            <router-link
              to="/"
              class="notification"
              @click="showNotification = !showNotification"
            >
              <img src="@/assets/images/notification-svgrepo-com.svg" /><span
                class="new_notification"
              ></span>
            </router-link>
          </div>
          <div class="">
            <router-link to="/">
              <div class="profile">
                <div>
                  <img src="@/assets/images/profile.jpg" />
                </div>
                <div class="information">
                  <h6>Dr.Mohamed</h6>
                  <span>Chernist</span>
                </div>
              </div></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "./NavbarStyling.scss";
.navbar-btns {
  display: block;
  width: 100%;
  ul {
    display: block;
    margin: 0px;
    padding: 0px;
    li {
      padding-bottom: 10px;
      a,
      button {
        color: black !important;
        font-weight: 700 !important;
        border: 0px;
        background: transparent;
        font-weight: 700;
      }
    }
  }
  .address {
    position: relative;
    width: max-content;
    margin: auto;
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
      top: 23px !important;
      right: 0px;
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
.features-profile-mobile {
  .search {
    position: relative;
    input,
    input:focus,
    input:focus-visible,
    input:focus-within {
      height: 38px;
      border: 1px solid #f0eceb;
      background: #f0eceb !important;
      border-radius: 10px;
      outline: 0px;
      padding-left: 30px !important;
      width: 100%;
      margin-bottom: 0px !important;
      font-size: 14px;
    }
    span {
      top: 5px;
      left: 10px;

      position: absolute;
      img {
        width: 15px;
        height: 15px;
      }
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
    .notification {
      display: block;
      background: #f0eceb;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      margin: auto;
      padding: 1px;
      cursor: pointer;
      text-align: center;
      position: relative;
      img {
        width: 20px;
        height: 20px;
      }
      .new_notification {
        position: absolute;
        top: 4px;
        background: red;
        border-radius: 50%;
        width: 6px;
        height: 6px;
        display: inline-block;
        right: 8px;
      }
    }
    .profile {
      justify-content: space-between;
      align-items: center;
      display: flex;
      img {
        width: 40px;
        border-radius: 100%;
        height: 40px;
      }
      .information {
        h6 {
          font-size: 15px;
          margin: 0px;
          padding: 0px;
          color: black;
        }
        span {
          font-size: 13px;
          color: #ddd;
        }
      }
    }
  }
}
</style>
<style>
@media screen and (max-width: 1142px) {
  .navbar-expand-lg .navbar-toggler {
    display: block !important;
  }
}
</style>
