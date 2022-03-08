import express from "express";
import productsModel from '../models/products.model.js'
const Router = express.Router();
Router.get('/',async (req,res)=>{
    const size = req.query.size||10;
    const page = req.query.page || 1;
    const previous = req.query.previous ||1;
    const next = req.query.next ||1;
    const offset = (page - 1) * size;
    const total = await productsModel.countProduct();
    let nPages = Math.floor(total / size);
      if (total % size > 0) nPages++;
      const pageNumbers = [];
      for (let i = 1; i <= nPages; i++) {
        pageNumbers.push({
          value: i,
          isCurrent: +page === i
        });
    }
    
    const list = await productsModel.findPagingLayout(size,offset);
   
    res.render('home',{
      products: list,
      empty: list.length === 0,
      pageNumbers,
      size:size,
      next : +page === +nPages ? +nPages : +page+1,
      previous: +page ===1 ? 1 : +page-1,

    });
  })
export default Router;
