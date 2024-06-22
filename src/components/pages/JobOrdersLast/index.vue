<script lang="ts" setup>
import type { Header } from "vue3-easy-data-table";
import { onMounted, ref, defineProps } from "vue";
//searchValue
const searchValue = ref("");
// props
let props = defineProps(["JobOrdersLastList"]);
//headers
const headers: Header[] = [
  { text: "job order code", value: "jobOrderCode" },
  { text: "Patiant", value: "Patiant" },
  { text: "Gender", value: "Gender" },
  { text: "Age", value: "Age" },
  { text: "job order status", value: "status", sortable: true },
  { text: "Sample status", value: "Samplestatus", sortable: true },
  { text: "Action", value: "Action" },
];

//items data
const items = ref([]);
onMounted(() => {
  items.value = props.JobOrdersLastList;
});
</script>
<template>
  <div>
    <!--components Card search Fillter Table-->
    <div class="card search-fillter">
      <input type="text" v-model="searchValue" placeholder="Search" />
      <span class="icon-search"
        ><img src="@/assets/images/search-alt-svgrepo-com.svg"
      /></span>
    </div>
    <!--components Card Table-->
    <div class="card p-4 pb-0 card-table">
      <!--Easy Data Table -->
      <EasyDataTable
        :headers="headers"
        :items="items"
        :theme-color="'#cf6666'"
        buttons-pagination
        :rows-per-page="7"
        :loading="items.length == 0"
        :search-value="searchValue"
      >
        <!--status-->
        <template #item-status="data"
          ><div v-if="data.status == 1" class="Processed">
            <span>Processed</span>
          </div>
          <div v-if="data.status == 2" class="NoProcessed">
            <span>Not Processed</span>
          </div>
        </template>
        <!--Sample status-->
        <template #item-Samplestatus="data"
          ><div v-if="data.Samplestatus == 1" class="Collected">
            <span>Collected</span>
          </div>
          <div v-if="data.Samplestatus == 2" class="UnCollected">
            <span>UnCollected</span>
          </div>
        </template>
        <!--Action-->
        <template #item-Action="data"
          ><div
            class="text-center"
            v-if="data.status == 1 && data.Samplestatus == 1"
          >
            <router-link to="/">
              <img src="@/assets/images/eye-svgrepo-com.svg" class="showIcon" />
            </router-link>
          </div>
        </template>
        <!--empty message-->
        <template #empty-message>
          <a href="https://google.com">nothing here</a>
        </template>
      </EasyDataTable>
    </div>
  </div>
</template>
<style scoped lang="scss">
//card
.card {
  border-radius: 0px;
}
//card-table
.card-table {
  margin-top: 5px;
}
//showIcon
.showIcon {
  width: 18px;
  height: 18px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
}
//Processed,NoProcessed,Collected,UnCollected
.Processed,
.NoProcessed,
.Collected,
.UnCollected {
  background: hsl(138.79, 54.7%, 64.51%);
  color: hsl(270, 1.11%, 35.29%) !important;
  padding: 3px 10px;
  max-width: 130px;
  border-radius: 8px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
}
.NoProcessed,
.UnCollected {
  background: hsl(347.77deg 100% 79.8%);
}
//search-fillter
.search-fillter {
  position: relative;
  input,
  input:focus,
  input:focus-visible,
  input:focus-within {
    margin: 15px !important;
    height: 40px;
    background: #f0eceb;
    border: #f0eceb !important;
    outline: 0px;
    border-radius: 10px;
    padding-left: 35px !important;
    font-size: 15px;
  }
  .icon-search {
    position: absolute;
    top: 21px;
    left: 28px;
    img {
      width: 15px;
      height: 15px;
    }
  }
}
</style>
