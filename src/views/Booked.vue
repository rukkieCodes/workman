<template>
  <div class="home">
    <Booked />
  </div>
</template>

<script>
// @ is an alias to /src
import Booked from "../components/book/Booked";

export default {
  name: "booked",
  components: {
    Booked
  }
};
</script>