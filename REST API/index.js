const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let books = [];

// GET all books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST add a book
app.post('/books', (req, res) => {
    const book = req.body;
    book.id = books.length + 1;
    books.push(book);
    res.status(201).json(book);
});

// PUT update a book
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === bookId);
    if (index !== -1) {
        books[index] = { ...books[index], ...req.body };
        res.json(books[index]);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// DELETE a book
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    books = books.filter(b => b.id !== bookId);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
