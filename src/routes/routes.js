import { addnewProduct, 
    getProducts, 
    getProductWithID,
    updateProduct,
    deleteProduct 
} from '../controllers/controllers';

const routes = (app) => {
    app.route('/products')
        //get all the products in the database
        .get(getProducts) //dont add ; here else next line wont run

        //post endpoint
        .post(addnewProduct);

    app.route('/products/:ProductID')
        //to get specific product with an ID
        .get(getProductWithID)
        //update a specific Product
        .out(updateProduct)
        //delete a specific product
        .delete(deleteProduct);
}

export default routes;