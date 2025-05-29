[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19664781&assignment_repo_type=AssignmentRepo)
# MongoDB Bookstore Database Assignment

This project implements a bookstore database using MongoDB with various queries and operations.

## Setup Instructions

1. Install MongoDB on your system if not already installed
2. Start MongoDB service:
   ```bash
   sudo systemctl start mongod
   ```
3. Open MongoDB shell:
   ```bash
   mongosh
   ```
4. Create and load sample data:
   ```bash
   load("sample_data.js")
   ```
5. Run the queries from `queries.js`:
   ```bash
   load("queries.js")
   ```

## Prerequisites
- MongoDB 5.0 or higher
- mongosh (MongoDB Shell)

## Database Structure

The database `plp_bookstore` contains a collection `books` with the following schema:
- title (string)
- author (string)
- genre (string)
- price (number)
- published_year (number)
- in_stock (boolean)

## Features Implemented

- Basic CRUD operations
- Advanced queries with filtering and sorting
- Aggregation pipelines for data analysis
- Database indexing for performance optimization

## Query Examples

See `queries.js` for detailed examples of:
- Finding books by genre, year, and author
- Updating and deleting books
- Complex queries with multiple conditions
- Sorting and pagination
- Aggregation operations
- Index creation and usage