{
  /*
        You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.
    */

  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };
  type IsRecentBook = (book: Book) => void;
  type CurrentYear = number;

  const isRecentBook: IsRecentBook = (book) => {
    const currentYear: CurrentYear = new Date().getFullYear();
    const res: boolean = currentYear - 5 <= book.publishedYear ? true : false;
    console.log(res);
  };

  const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022,
  };

  isRecentBook(book1);
}
