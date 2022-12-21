import express from 'express';
import cors from 'cors';
import { productsAPI } from './productsAPI.js';
import { authAPI } from './authAPI.js';
import { db } from './db.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());
let corsOptions = {
    origin: true,
    credentials: true
}
app.use(cors(corsOptions));
app.use('/db/images', express.static('./db/images'));
app.use('/api/products', productsAPI);
app.use('/api/auth', authAPI);

const port = process.env.PORT || 3000;
db.sync().then(() => {
    app.listen(port, function () {
        console.log(`Listening ${port} port...`);
    });
}).catch(err => console.log(err));