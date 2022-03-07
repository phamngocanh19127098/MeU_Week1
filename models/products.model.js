import db from '../utils/db.js'


export default {
     async findById(code){
        const object =  await db('product').where('code',code);
        return object[0];
    },
    findPage(size,offset){
        return  db('product').limit(size).offset(offset);

    },
    addProduct(product){
        return db('product').insert(product);
    },
    updateProduct(code,product){
        return db('product').where('code',code).update(product);
    },
    deleteProduct(code){
        return db('product').where('code',code).del();
    }
}