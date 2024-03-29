import express from 'express';
import {requireSignIn, isAdmin} from '../middlewares/authMiddleware.js'
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController, productFiltersController, productCountController, productListController, productCategoryController, braintreeTokenController, braintreePaymentController } from '../controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router();

// routes
// create product
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController);

// update product
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController);

// get products
router.get('/get-product', getProductController);

// get single product
router.get('/get-product/:slug', getSingleProductController);

// get photo
router.get('/product-photo/:pid', productPhotoController);

// delete product
router.delete('/delete-product/:pid', deleteProductController);

// filter product
router.post('/product-filters', productFiltersController);

// product count
router.get('/product-count', productCountController);

// product per page
router.get('/product-list/:page', productListController);



//categorywise product
router.get('/product-category/:slug', productCategoryController); 

// payments routes
// token
router.get(`/braintree/token`, braintreeTokenController);

// payments
router.post('/braintree/payments', requireSignIn, braintreePaymentController);

export default router;
