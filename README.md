[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19664781&assignment_repo_type=AssignmentRepo)
# MongoDB Bookstore Database Assignment

This project implements a bookstore database using MongoDB with various queries and operations.

## Try it Online

- [Open in MongoDB Playground](https://mongoplayground.net/) - A lightweight online environment for testing MongoDB queries.
- [Try in MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) - Create and manage your own MongoDB cluster in the cloud.
- [Practice on MongoDB University](https://university.mongodb.com/) - Learn MongoDB concepts and practice queries with guided tutorials.

These online environments allow you to practice MongoDB queries without local installation.

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
- 2GB+ free disk space

## Detailed Setup

### Installing MongoDB on Ubuntu
```bash
sudo apt update
sudo apt install -y mongodb-org
```

### Installing MongoDB on MacOS
```bash
brew tap mongodb/brew
brew install mongodb-community
```

### Verifying Installation
```bash
mongod --version
mongosh --version
```

## Troubleshooting

1. If MongoDB service fails to start:
   ```bash
   sudo systemctl status mongod
   sudo systemctl restart mongod
   ```

2. If permission errors occur:
   ```bash
   sudo chown -R mongodb:mongodb /var/lib/mongodb
   sudo chown mongodb:mongodb /tmp/mongodb-27017.sock
   ```

## Running Scripts

### Database Scripts
1. Initialize the database:
   ```bash
   mongosh init_db.js
   ```

2. Load sample data:
   ```bash
   mongosh load_data.js
   ```

3. Run example queries:
   ```bash
   mongosh queries.js
   ```

### Utility Scripts
- To backup the database:
  ```bash
  ./scripts/backup.sh
  ```

- To restore from backup:
  ```bash
  ./scripts/restore.sh <backup-file>
  ```

- To run all tests:
  ```bash
  ./scripts/run_tests.sh
  ```

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
