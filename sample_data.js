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

print("Sample data loaded successfully!");
print("Inserted", db.books.countDocuments(), "books into the database");
