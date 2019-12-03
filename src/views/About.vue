<template>
  <div class="home white">
    <About />
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/about/About.vue";

export default {
  name: "home",
  components: {
    About
  }
};
</script>
