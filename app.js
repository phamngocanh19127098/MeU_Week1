import express from 'express'
import morgan from 'morgan';
import productsRoute from './routes/products.route.js'
import productlistRoute from './routes/productlist.route.js'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';
;
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(morgan('dev'));

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());
app.engine('hbs',engine({
  defaultLayout: 'main.hbs'
}))
app.set('view engine', 'hbs');
app.set('views', './views');
app.use('/api/products',productsRoute);
app.use('/',productlistRoute);
const port = 3000;
app.listen(port, function () {
  console.log(`App listening at http://localhost:${port}`);
});
export default app;