<script lang="ts" setup>
import JobOrdersLast from "@/components/pages/JobOrdersLast/index.vue";
import { UseJobOrdersLast } from "@/stores/JobOrdersLast/index";
let JobOrdersLastList = UseJobOrdersLast();
</script>
<template>
  <div class="">
    <!--components JobOrdersLast-->
    <JobOrdersLast :JobOrdersLastList="JobOrdersLastList.JobOrdersLastList" />
  </div>
</template>
