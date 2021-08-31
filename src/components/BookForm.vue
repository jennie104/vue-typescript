<template>
  <div class="form">
    <input type="text" required placeholder="book title" v-model="title" />
    <input type="text" required placeholder="book author" v-model="author" />
    <button @click="addBook">Add Book</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { Store } from "vuex";
import { BookData, BooksState } from "../types/interfaces";

export default defineComponent({
  setup(props, context) {
    const store: Store<BooksState> = context.root.$store;
    const title = ref("");
    const author = ref("");

    const addBook = (): void => {
      if (title.value && author.value) {
        const book: BookData = {
          title: title.value,
          author: author.value,
          id: Date.now()
        };

        store.commit("addBook", book);
        title.value = "";
        author.value = "";
      }
    };

    return {
      title,
      author,
      addBook
    };
  }
});
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;

  input {
    width: 100%;
    padding: 10px;
    margin: 6px 0;
    box-sizing: border-box;
    color: #edd7cc;
    border: 0;
    outline: none;
    background-color: darken($color: #6a6a6a, $amount: 10);
    @media screen and (min-width: 1024px) {
      width: 70%;
    }
    @media screen and (min-width: 1280px) {
      width: 60%;
    }
  }

  button {
    margin: 20px auto;
    background-color: darken($color: #6a6a6a, $amount: 15);
    color: #e0e0e0;
    border: 0;
    padding: 6px 20px;
    display: block;
    outline: none;
    cursor: pointer;
  }
}
</style>
