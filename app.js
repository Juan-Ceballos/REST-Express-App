const express = requires('express')
const app = express()
app.use(express.json()) // parse json bodies

// Array to simulate a databse
let books = []

// shouw route: GET /books/:id
app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id ==== parseInt(req.params.id))
    if (!book) {
        return res.status(404).send('Book not found')
    }
    res.send(book)
})

// Create route: POST /books
app.post('/books', (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    }
    books.push(book)
    res.status(201).send(book)
})

const port = 3000
app.listen(port, () => console.log(`Server running on port ${port}`))



