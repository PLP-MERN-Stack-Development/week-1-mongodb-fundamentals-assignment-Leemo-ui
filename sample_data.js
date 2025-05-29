db.books.drop();

db.books.insertMany([
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    price: 9.99,
    published_year: 1925,
    in_stock: true
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    price: 11.99,
    published_year: 1949,
    in_stock: true
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Technology",
    price: 29.99,
    published_year: 2008,
    in_stock: true
  },
  {
    title: "Data Science Basics",
    author: "John Smith",
    genre: "Technology",
    price: 34.99,
    published_year: 2019,
    in_stock: false
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Fiction",
    price: 8.99,
    published_year: 1813,
    in_stock: true
  }
]);

print("Sample data loaded successfully!");
