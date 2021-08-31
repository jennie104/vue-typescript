import Vue from "vue";
import Vuex from "vuex";
import { BookData } from "../types/interfaces.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [] as BookData[]
  },
  mutations: {
    initBooks(state): void {
      const localData = localStorage.getItem("books");
      const initBooks: BookData[] = localData ? JSON.parse(localData) : [];
      state.books = initBooks;
    },
    addBook(state, book: BookData): void {
      const bookInfo = {
        title: book.title,
        author: book.author,
        id: book.id
      }
      state.books.push(bookInfo);
    },
    removeBook(state, id: number): void {
      state.books = state.books.filter(book => book.id !== id);
      
    }
  },
  actions: {},
  modules: {}
});
