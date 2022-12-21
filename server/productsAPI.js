import express from 'express';
import { Product, User, Purchase } from './db.js';
import cookieParser from 'cookie-parser';

export const productsAPI = express.Router();
productsAPI.use(cookieParser());
const urlencodedParser = express.urlencoded();

productsAPI.get('/getProducts', (req, res) => {
    Product.findAll({ raw: true }).then(products => {
        res.status(200).json(products);
    }).catch(err => {
        res.status(500).send({ message: err.message });
    })
});

productsAPI.get('/getCart', (req, res) => {
    User.findOne({ where: { id: req.cookies.userIdBS } })
        .then(user => {
            if (!user) return;
            user.getProducts().then(products => {
                const data = products.map((product) => {
                    return {
                        title: product.product_name,
                        price: product.price,
                        image: product.image,
                        quantity: product.purchases.quantity,
                        size: product.purchases.size,
                        color: product.purchases.color
                    }
                })
                const jsonData = JSON.stringify(data)
                res.status(200).send(jsonData);
            })
        })
})
productsAPI.post('/addToCart', urlencodedParser, (req, res) => {
    console.log('DATA')
    console.log(req.cookies);
    console.log(req.body);
    User.findOne({ where: { id: req.cookies.userIdBS } })
        .then(user => {
            if (!user) return;
            console.log('user finded');
            Product.findOne({ where: { product_name: req.body.product_name } })
                .then(product => {
                    if (!product) return
                    console.log('product finded');
                    console.log(req.body)
                    user.addProduct(product, {
                        through: {
                            quantity: req.body.quantity,
                            size: req.body.size,
                            color: req.body.color
                        }
                    })
                })
                .then(() => {
                    console.log('response send')
                    res.status(200).end();
                })
        })
})
productsAPI.post('/getProduct', urlencodedParser, (req, res) => {
    Product.findByPk(req.body.id)
        .then(product => {
            if (!product) return;
            console.log(product)
            res.status(200).send(product)
        })
        .catch(err => res.status(500).end())
})
productsAPI.post('/deleteFromCart', urlencodedParser, (req, res) => {
    console.log('DELETING');
    console.log(req.body);
    User.findOne({ where: { id: req.cookies.userIdBS } })
        .then(user => {
            if (!user) return;
            user.getProducts().then(products => {
                products.forEach(product => {
                    if (product.product_name === req.body.title) product.purchases.destroy();
                })
                res.status(200).end();
            })
        })
})