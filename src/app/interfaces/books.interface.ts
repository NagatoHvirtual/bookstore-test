export interface BooksInterface {
  results: BooksResultInterface[],
  next: string
}
export interface BooksResultInterface {
  id: string,
  title: string,
  authors: BooksAuthorsInterface[]
}

export interface BooksAuthorsInterface {
  name: string,
  birth_year: number,
  death_year: number
}
