import express from 'express';
import { getProducts } from "./controllers/ProductController.js";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url'

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));



app.get('/api/products', getProducts);

app.listen(4444, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log("Server started on port 4444");
});
