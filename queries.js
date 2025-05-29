// create database and collection

db.createCollection("books")
//Task 2: Basic CRUD Operations
// Insert sample books into the collection
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
        title: "MongoDB: The Definitive Guide",
        author: "Shannon Bradshaw",
        genre: "Technology",
        price: 49.99,
        published_year: 2019,
        in_stock: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        price: 12.99,
        published_year: 1960,
        in_stock: true
    },
    {
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        genre: "Technology",
        price: 29.99,
        published_year: 2008,
        in_stock: false
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Fiction",
        price: 11.99,
        published_year: 1949,
        in_stock: true
    }
]);

// Find all books in a specific genre
db.books.find({ genre: "Fiction" });

// Find books published after a certain year
db.books.find({ published_year: { $gt: 2000 } });

// Find books by a specific author
db.books.find({ author: "F. Scott Fitzgerald" });

// Update the price of a specific book
db.books.updateOne(
  { title: "The Great Gatsby" },
  { $set: { price: 12.99 } }
);

// Delete a book by its title
db.books.deleteOne({ title: "The Great Gatsby" });

// Task 3: Advanced Queries

// Find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// Projection to return only title, author, and price
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
);

// Sort books by price (ascending)
db.books.find().sort({ price: 1 });

// Sort books by price (descending)
db.books.find().sort({ price: -1 });

// Pagination - Page 1 (first 5 books)
db.books.find().limit(5);

// Pagination - Page 2 (skip first 5, show next 5)
db.books.find().skip(5).limit(5);

// Task 3: Advanced Queries
// Find books that cost more than $20 and are in stock
db.books.find({
  price: { $gt: 20 },
  in_stock: true
});

// Find technology books published after 2000
db.books.find({
  genre: "Technology",
  published_year: { $gt: 2000 }
});

// Task 4: Aggregation Pipeline

// Calculate average price by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
]);

// Find author with most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 }
  },
  {
    $limit: 1
  }
]);

// Group books by publication decade and count
db.books.aggregate([
  {
    $project: {
      decade: {
        $subtract: [
          "$published_year",
          { $mod: ["$published_year", 10] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  }
]);

// Task 4: Aggregation Pipeline
// Calculate total value of books in stock
db.books.aggregate([
  {
    $match: { in_stock: true }
  },
  {
    $group: {
      _id: null,
      totalValue: { $sum: "$price" }
    }
  }
]);

// Task 5: Indexing

// Create index on title field
db.books.createIndex({ title: 1 });

// Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// Example of using explain() to check index usage
db.books.find({ title: "The Great Gatsby" }).explain("executionStats");

// Example of using explain() with compound index
db.books.find({
  author: "F. Scott Fitzgerald",
  published_year: { $gt: 1920 }
}).explain("executionStats");

