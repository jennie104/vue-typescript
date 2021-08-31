<template>
  <nav>
    <h1>Reading List</h1>
    <p>Currently you have {{ books.length }} books</p>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { BookData } from "../types/interfaces";

export default defineComponent({
  props: {
    books: {
      type: Array as PropType<Array<BookData>>,
      default: []
    }
  }
});
</script>

<style lang="scss">
nav {
  background-color: darken($color: #6a6a6a, $amount: 3);
  padding: 10px;
  text-align: center;
  color: #e0e0e0;

  button {
    background-color: darken($color: #6a6a6a, $amount: 15);
    border: 0;
    border-radius: 5px;
    padding: 8px 20px;
    cursor: pointer;
    outline: none;
    color: #fff;
  }
}
</style>
