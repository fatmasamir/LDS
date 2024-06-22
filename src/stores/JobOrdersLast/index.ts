import callServer from "@/assets/scripts/callServer/callServer";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useAuthStore } from "../auth/index";
const toast = useToast();
export const UseJobOrdersLast = defineStore("JobOrdersLast", () => {
  const JobOrdersLastList = ref([
    {
      jobOrderCode: "1212123123123",
      Patiant: "Ahmed Ahmed Ahmed Ahmed",
      Gender: "Male",
      Age: 25,
      status: 1,
      Samplestatus: 1,
    },
    {
      jobOrderCode: "1212123123123",
      Patiant: "Ahmed Ahmed Ahmed Ahmed",
      Gender: "Male",
      Age: 25,
      status: 1,
      Samplestatus: 2,
    },
    {
      jobOrderCode: "1212123123123",
      Patiant: "Mohamed ali",
      Gender: "Male",
      Age: 25,
      status: 2,
      Samplestatus: 1,
    },
    {
      jobOrderCode: "1212123123123",
      Patiant: "ali ali",
      Gender: "Male",
      Age: 25,
      status: 1,
      Samplestatus: 2,
    },
    {
      jobOrderCode: "1212123123123",
      Patiant: "Ahmed Ahmed Ahmed Ahmed",
      Gender: "Male",
      Age: 25,
      status: 2,
      Samplestatus: 1,
    },
    {
      jobOrderCode: "1212123123123",
      Patiant: "Ahmed Ahmed Ahmed Ahmed",
      Gender: "Male",
      Age: 25,
      status: 2,
      Samplestatus: 1,
    },
    {
      jobOrderCode: "1212123123123",
      Patiant: "Ahmed Ahmed Ahmed Ahmed",
      Gender: "Male",
      Age: 25,
      status: 2,
      Samplestatus: 1,
    },
    {
      jobOrderCode: "1212123123123",
      Patiant: "Ahmed Ahmed Ahmed Ahmed",
      Gender: "Male",
      Age: 25,
      status: 2,
      Samplestatus: 1,
    },
    {
      jobOrderCode: "1212123123123",
      Patiant: "Ahmed Ahmed Ahmed Ahmed",
      Gender: "Male",
      Age: 25,
      status: 2,
      Samplestatus: 1,
    },
    {
      jobOrderCode: "1212123123123",
      Patiant: "Ahmed Ahmed Ahmed Ahmed",
      Gender: "Male",
      Age: 25,
      status: 2,
      Samplestatus: 1,
    },
    {
      jobOrderCode: "1212123123123",
      Patiant: "Ahmed Ahmed Ahmed Ahmed",
      Gender: "Male",
      Age: 25,
      status: 2,
      Samplestatus: 1,
    },
    {
      jobOrderCode: "1212123123123",
      Patiant: "Ahmed Ahmed Ahmed Ahmed",
      Gender: "Male",
      Age: 25,
      status: 2,
      Samplestatus: 1,
    },
    {
      jobOrderCode: "1212123123123",
      Patiant: "Ahmed Ahmed Ahmed Ahmed",
      Gender: "Male",
      Age: 25,
      status: 2,
      Samplestatus: 1,
    },
    {
      jobOrderCode: "1212123123123",
      Patiant: "Ahmed Ahmed Ahmed Ahmed",
      Gender: "Male",
      Age: 25,
      status: 2,
      Samplestatus: 1,
    },
    {
      jobOrderCode: "1212123123123",
      Patiant: "Ahmed Ahmed Ahmed Ahmed",
      Gender: "Male",
      Age: 25,
      status: 2,
      Samplestatus: 1,
    },
    {
      jobOrderCode: "1212123123123",
      Patiant: "Ahmed Ahmed Ahmed Ahmed",
      Gender: "Male",
      Age: 25,
      status: 2,
      Samplestatus: 1,
    },
    {
      jobOrderCode: "1212123123123",
      Patiant: "Ahmed Ahmed Ahmed Ahmed",
      Gender: "Male",
      Age: 25,
      status: 2,
      Samplestatus: 1,
    },
  ]);
  const authStore = useAuthStore();
  // is_waiting
  // const is_loading = ref<Boolean>(false);
  // const is_loading_change_password = ref<Boolean>(false);

  return { JobOrdersLastList };
});
