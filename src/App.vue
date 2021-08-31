<template>
  <div id="app">
    <Nav :books="books" />
    <BookList :books="books" />
    <BookForm />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, computed } from "@vue/composition-api";
import { Store } from "vuex";
import { BooksState } from "./types/interfaces";
import Nav from "./components/Nav.vue";
import BookList from "./components/BookList.vue";
import BookForm from "./components/BookForm.vue";

export default defineComponent({
  components: {
    Nav,
    BookForm,
    BookList
  },
  setup(props, context) {
    const store: Store<BooksState> = context.root.$store;
    const books = computed(() => store.state.books);
    store.commit("initBooks");
    watch(
      () => books,
      () => {
        localStorage.setItem("books", JSON.stringify(books));
      }
    );
    return {
      books
    };
  }
});
</script>

<style lang="scss">
body {
  margin: 0;
  background: lighten($color: #6a6a6a, $amount: 15);
}

#app {
  margin: 0;
  max-width: 100%;
  min-height: 100vh;
}
</style>
