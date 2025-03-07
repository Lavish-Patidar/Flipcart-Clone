import express from 'express';
import { userLogin, userSignup } from '../controller/user.controller.js';
import { getProductById, getProducts } from '../controller/product.controller.js';
import { createOrder } from '../controller/order.controller.js'; // Import the createOrder function


const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);


router.get('/products', getProducts); // Protect the products route
router.get('/product/:id', getProductById); // Protect the product details route

router.post('/order', createOrder); // Add route for creating orders
export default router;
