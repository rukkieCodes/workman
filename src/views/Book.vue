<template>
  <div class="book white">
    <Book />
  </div>
</template>

<script>
// @ is an alias to /src
import Book from "@/components/book/Book.vue";

export default {
  name: "book",
  components: {
    Book
  }
};
</script>
