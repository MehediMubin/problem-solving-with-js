// 2.Task: Object Manipulation

// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const Books = [
   {
      title: "Harry Potter",
      author: "J.K. Rowling",
      year: 1997,
   },
   {
      title: "The Atomic Habits",
      author: "James Clear",
      year: 2018,
   },
   {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      year: 1999,
   },
   {
      title: "How to Talk to Anyone",
      author: "Leil Lowndes",
      year: 2003,
   },
   {
      title: "7 Habits of Highly Effective People",
      author: "Stephen Covey",
      year: 1989,
   },
];

const getBookNames = (Books) => {
   const bookNames = Books.map((book) => book.title);
   return bookNames;
};

const bookNames = getBookNames(Books);
console.log(bookNames);
