import express from 'express'
import morgan from 'morgan';
import productsRoute from './routes/products.route.js'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(morgan('dev'));

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());

app.use('/api/products',productsRoute);
const port = 3000;
app.listen(port, function () {
  console.log(`App listening at http://localhost:${port}`);
});