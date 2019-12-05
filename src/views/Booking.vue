<template>
  <div class="home">
    <Booking />
  </div>
</template>

<script>
// @ is an alias to /src
import Booking from "../components/book/Booking";

export default {
  name: "booking",
  components: {
    Booking
  }
};
</script>