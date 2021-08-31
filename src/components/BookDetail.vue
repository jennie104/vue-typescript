<template>
  <li @click="removeBook">
    <div class="title">{{ book.title }}</div>
    <div class="author">{{ book.author }}</div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { Store } from "vuex";
import { BooksState, BookData } from "../types/interfaces";

export default defineComponent({
  props: {
    book: {
      type: Object as PropType<BookData>
    }
  },
  setup(props, context) {
    const store: Store<BooksState> = context.root.$store;
    const removeBook = (): void => {
      if (props.book) store.commit("removeBook", props.book.id);
    };
    return {
      removeBook
    };
  }
});
</script>

<style lang="scss" scoped>
li {
  background-color: darken($color: #6a6a6a, $amount: 20);
  border-radius: 4px;
  padding: 20px;
  cursor: pointer;
  margin: 10px 0;
  &:hover {
    opacity: 0.7;
    text-decoration: line-through;
    border: 1px solid #e3d7d1;
  }

  .title {
    font-weight: bold;
    color: #fff;
    font-size: 1.2em;
  }

  .author {
    font-size: 0.9em;
    color: #ddd;
  }
}
</style>
