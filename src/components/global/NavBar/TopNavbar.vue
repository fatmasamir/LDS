<script setup>
import { ref } from "vue";
import NotificationPopup from "./NotificationPopup.vue";
import NavBar from "./NavBar.vue";
// showNotification
const showNotification = ref(false);
</script>
<template>
  <!--top-navbar-->
  <div class="top-navbar">
    <div class="row">
      <div class="col-lg-6">
        <!--mobile-content-->
        <div class="mobile-content">
          <div class="Logo"><img src="@/assets/images/Logo_5_.svg" /></div>
          <!--mobile-navbar that show on mobile only-->
          <div class="mobile-navbar">
            <NavBar></NavBar>
          </div>
        </div>
      </div>
      <!--features-profile-->
      <div class="col-lg-6 features-profile">
        <div class="row">
          <!--search-->
          <div class="search col-md-8">
            <input type="text" placeholder="Search" />
            <span
              ><img src="@/assets/images/search-alt-svgrepo-com.svg"
            /></span>
          </div>
          <!--notification-->
          <div class="col-md-1">
            <div
              class="notification"
              @click="showNotification = !showNotification"
            >
              <img src="@/assets/images/notification-svgrepo-com.svg" /><span
                class="new_notification"
              ></span>
            </div>
          </div>
          <!--profile-->
          <div class="col-md-3 px-3">
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
        <NotificationPopup v-if="showNotification" />
      </div>
    </div>
  </div>
  <!--website-navbar that show on webdite only-->
  <div class="website-navbar">
    <NavBar></NavBar>
  </div>
</template>
<style scoped lang="scss">
//top-navbar
.top-navbar {
  background: white;
  padding: 10px 15px;
  border-bottom: 3px solid #f0eceb;
  //top-navbar Logo
  .Logo {
    padding-left: 20px;
    //top-navbar Logo img
    img {
      width: 120px;
    }
  }
  //top-navbar row
  .row {
    display: flex;
    align-items: center;
  }
  //top-navbar features-profile
  .features-profile {
    //top-navbar features-profile search
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
        left: 20px;
        position: absolute;
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
    //top-navbar features-profile notification
    .notification {
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
    //top-navbar features-profile profile
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
  //top-navbar mobile-navbar
  .mobile-navbar {
    display: none;
  }
}
//@media
@media screen and (max-width: 1142px) {
  //top-navbar
  .top-navbar {
    padding: 10px 0px;

    //top-navbar mobile-content
    .mobile-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0px;
      align-items: center;
      //top-navbar mobile-content mobile-navbar
      .mobile-navbar {
        display: block;
      }
    }
  }
  //website-navbar
  .website-navbar {
    display: none;
  }
  //features-profile
  .features-profile {
    display: none;
  }
}
</style>
