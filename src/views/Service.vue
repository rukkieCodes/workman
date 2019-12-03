<template>
  <div class="home white">
    <Service />
  </div>
</template>

<script>
// @ is an alias to /src
import Service from "@/components/service/Service.vue";

export default {
  name: "home",
  components: {
    Service
  }
};
</script>
