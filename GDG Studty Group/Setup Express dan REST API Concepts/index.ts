import express, { Request, Response, Application } from 'express';
import * as swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';


const app: Application = express();
const PORT: number = 3000;

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}

let books: Book[] = [];

app.use(express.json());

// Load Swagger
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ROUTES
app.get('/books', (req: Request, res: Response) => {
    res.status(200).json(books);
});

app.post('/books', (req: Request, res: Response) => {
    const { title, author, year } = req.body;
    if (!title || !year) {
        return res.status(400).json({ message: "Macem mana kau masukan data!" });
    }
    const newBook: Book = { 
        id: Date.now(), 
        title, 
        author: author || "Unknown", 
        year
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

app.get('/books/search', (req: Request, res: Response) => {
    const titleQuery = req.query.title as string;
    if (!titleQuery) {
        return res.status(400).json({ message: "Parameter 'title' diperlukan wok!" });
    }
    const filteredBooks = books.filter(b => b.title.toLowerCase().includes(titleQuery.toLowerCase()));
    res.status(200).json(filteredBooks);
});

app.put('/books/:id', (req: Request, res: Response) => {
    const id: number = parseInt(String(req.params.id));
    const index = books.findIndex(b => b.id === id);

    if (index !== -1) {
        books[index] = { ...books[index], ...req.body, id };
        res.status(200).json(books[index]);
    } else {
        res.status(404).json({ message: "Cari yang ada aja!" });
    }
});

app.delete('/books/:id', (req: Request, res: Response) => {
    const id: number = parseInt(String(req.params.id));
    const initialLength = books.length;
    books = books.filter(b => b.id !== id);

    if (books.length < initialLength) {
        res.status(200).json({ message: "Buku berhasil dihapus" });
    } else {
        res.status(404).json({ message: "Masukin yang benar! Banyak nyawit ni orang..." });
    }
});

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Sawit-chan! Haik! API Ready.</h1><p>Buka <a href="/api-docs">Swagger UI</a></p>');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Swagger: http://localhost:${PORT}/api-docs`);
});