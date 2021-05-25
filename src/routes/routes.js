import { addnewProduct } from '../controllers/controllers';

const routes = (app) => {
    app.route('/products')

        //post endpoint
        .post(addnewProduct);
}

export default routes;