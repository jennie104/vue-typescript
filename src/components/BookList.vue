<template>
  <ul v-if="books.length">
    <BookDetail v-for="book in books" :key="book.id" :book="book" />
  </ul>
  <div v-else class="empty">
    <p>No books to read.</p>
  </div>
</template>

<script lang="ts">
import BookDetail from "./BookDetail.vue";
import { defineComponent, PropType } from "@vue/composition-api";
import { BookData } from "../types/interfaces";

export default defineComponent({
  components: {
    BookDetail
  },
  props: {
    books: {
      type: Array as PropType<Array<BookData>>,
      default: []
    }
  }
});
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  list-style-type: none;
  @media screen and (min-width: 1024px) {
    margin: 0 8rem;
  }
  @media screen and (min-width: 1280px) {
    margin: 0 12rem;
  }
}
.empty {
  text-align: center;
}
</style>
