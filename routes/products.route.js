import express from "express";

import productsModel from "../models/products.model.js";

const router = express.Router();

router.get('/:code',async (req,res)=>{
    const code  = req.params.code;
    
    const product = await productsModel.findById(code);
    if(typeof(product)==='undefined'){
        return res.status(404).send({message:'Product Not Found'})
    }
    
    return res.send(product);
})

router.get('/',async (req,res)=>{
    const page = req.query.page||1;
    const size = req.query.size||5;
    const offset = (page-1)*size;
    const list = await productsModel.findPage(size,offset);
    if(list.length===0){
        return res.status(404).send({
            message:'Page not Found'
        })
    }
    else 
        res.send(list);
})
router.post('/',async(req,res)=>{
    const product = await productsModel.addProduct(req.body);
  
    if(product){
        res.status(200).send({message:'success'})
    }
    else res.status(404).send({message:'Not success'})
})

router.put('/:code',async(req,res)=>{
    
    const code = req.params.code;
    const checkProduct = await productsModel.findById(code);
    if(!checkProduct){
        return res.status(404).send({message:'Product Not Found'});
        
    }
    else {
        const updateResult = await productsModel.updateProduct(code,req.body);
        if(!updateResult){
            return res.send({message:'Not Success'});
        }
    }
    res.send({message:'Success'})
})
router.delete('/:code',async(req,res)=>{
    const code = req.params.code;
    const checkProduct = await productsModel.findById(code);
    if(!checkProduct){
        return res.status(404).send({message:'Product Not Found'});
        
    }
    else{
        const deleteResult =  await productsModel.deleteProduct(code);
        if(!deleteResult){
            return res.send({message:'Not Success'});
        }
    }
    res.send({message:'Success'})
})
export default router;