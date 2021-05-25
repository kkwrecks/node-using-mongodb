import { addnewProduct, 
    getProducts, 
    getProductWithID 
} from '../controllers/controllers';

const routes = (app) => {
    app.route('/products')
        //get all the products in the database
        .get(getProducts) //dont add ; here else next line wont run

        //post endpoint
        .post(addnewProduct);

    app.route('/products/:ProductID')
        //to get specific product with an ID
        .get(getProductWithID);
}

export default routes;