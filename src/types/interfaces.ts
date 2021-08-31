export interface Print {
  print(): void;
}

export interface BookData {
  title: string;
  author: string;
  id: number;
}

export interface BooksState {
  books: Array<BookData>;
}
