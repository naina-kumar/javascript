//write an ES6 function that takes an array of objects representing books and return an array with only the titles of each book.
const books=[
    {title: 'The Great Gatsby',author:'F.Scott Fitzgerald'},
    {title: 'To Kill a Mockingbird',author:'Harper Lee'},
    {title: '1984',author:'George Orwell'},
    {title: 'Pride and Prejudice',author:'Jane Austen'}
]

const bookTitle=books.map((Books)=>Books.title);
console.log(bookTitle);
