type Person = {
    name: string;
    age: number;
    email: string;
}

let myself: Person = {
    name: "Salvador",
    age: 36,
    email: "some@nachos.com",
}

interface Book {
    title: string;
    author: string;
    pages: number;
}

let books: Book[] = [
    {
        title: "I, Robot",
        author: "Isaac Asimov",
        pages: 100,
    }, {
        title: "The Lord Of The Rings",
        author: "J.R.R. Tolkien",
        pages: 1000
    },
    {
        title: "Search Inside Yourself",
        author: "Chade-Meng Tan",
        pages: 300
    }
];

const displayBookInfo = (book: Book): void => {
    console.log("The book is: ", book.title, book.author, book.pages);
}

books.forEach(book => displayBookInfo(book));

