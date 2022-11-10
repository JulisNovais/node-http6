const express = require('express')
const cors = require('cors')

const db = require('./db/dbConfig')

const app = express()

db.once('open', ()=> {
    console.log('Conexão realizada!')
})

const hostname = 'localhost'

const port = 5000

const books = [
    { _id: 1, title: 'O dia do Curinga', autor: 'Jostein Gaarden', favorito: true },
    { _id: 2, title: 'O mundo de sofia', autor: 'Jostein Gaarden', favorito: true },
    { _id: 3, title: 'A casa', autor: 'Raquel de Queiroz', favorito: false }
]

app.use(cors());

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//uri
app.get('/', (req, res) => {
    res.json({ nome: 'Juliete' })
})

app.get('/html', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/books', (req, res) => {
    res.send(books)
})

app.post('/books', (req, res) => {
    //o body contem a lista que é enviado
    const body = req.body
    console.log('body' , body)

    //percorrer a lista (sacola)
    body.map(obj => books.push(obj) )
    res.send(books)
})

app.get('/books/:id', (req, res) => {
    
    const book = books.find((book) => book._id == req.params.id)

    if (book)
        res.send(book)
    else
        res.sendStatus(404)
})

app.delete('/books/:id', (req, res) => {
    let id = req.params.id
    let index = books.findIndex(obj => obj._id === parseInt(id))

    console.log('index', index)

    books.splice(index, 1)

    res.status(200).json(books)
})

app.patch('/books/:id', (req, res) => {
    let id = parseInt(req.params.id)
    
    let book = books.find(obj => obj._id === id)
    console.log('book:', book)

    let body = req.body
    console.log('body:', body)

    book.title = body.title
    book.autor = body.autor

    res.send(book)
})

app.listen(port, () => console.log(`http://${hostname}:${port}`))
