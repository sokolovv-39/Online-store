import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import secret from '../auth.config.js';
import { User } from './db.js';

export const authAPI = express.Router();
authAPI.use(cookieParser());
const urlencodedParser = express.urlencoded();

authAPI.post('/signup', urlencodedParser, (req, res) => {
    User.create(
        {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        }
    ).then((user) => {
        sendResponse(user, res)
    })
});

authAPI.post('/signin', urlencodedParser, (req, res) => {
    User.findOne({
        where: {
            email: req.body.useremail
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({ message: 'User not found :(' });
        }
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid password!"
            });
        };
        sendResponse(user, res);
    })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
});

authAPI.get('/verify', (req, res) => {
    const token = req.header('Authentication').split(' ')[1];
    jwt.verify(token, secret.token, (err) => {
        if (err) {
            res.status(401).send({
                message: "Unauthorized!"
            });
        }
        res.status(200).send('ok');
    })
});

authAPI.get('/updateToken', (req, res) => {
    const token = req.header('Authentication').split(' ')[1];
    jwt.verify(token, secret.token, (err) => {
        if (err) {
            res.status(200).send("0");
        }
        let token = jwt.sign({ id: req.cookies.userIdBS }, secret.token, {
            expiresIn: '15m'
        });
        res.status(200).send(token);
    })
})

authAPI.get('/backgroundAuth', (req, res) => {
    if (req.cookies.userIdBS) {
        jwt.verify(req.cookies.refreshTokenBS, secret.refreshToken, (err) => {
            if (err) {
                res.status(401).send(err);
            }
            else {
                User.findByPk(req.cookies.userIdBS)
                    .then(user => {
                        console.log('User');
                        console.log(user)
                        sendResponse(user, res);
                    })
                /* let parsedData = null;
                new Promise((resolve, reject) => {
                    fs.readFile('./db/blackList.json', 'utf-8', (err, data) => {
                        if (err) {
                            reject('Ошибка в чтении файла');
                        }
                        else {
                            parsedData = JSON.parse(data);
                            if (parsedData.includes(`${req.cookies.refreshTokenBS}`)) {
                                reject('Токен недействителен');
                            }
                            else resolve('Все ок');
                        }
                    })
                })
                    .then((value) => {
                        console.log(value)
                        User.findByPk(req.cookies.userIdBS)
                            .then(user => {
                                sendResponse(user, res)
                            })
                    },
                        (error) => {
                            console.log(error)
                            res.status(200).end();
                        }) */
            }
        })
    }
    else {
        res.status(200).send("0");
    }
});

authAPI.get('/globalExit', (req, res) => {
    /* fs.readFile('./db/blackList.json', 'utf-8', (err, data) => {
        if (err) console.error(err)
        else {
            let parsedData = JSON.parse(data);
            parsedData.push(`${req.cookies.refreshTokenBS}`);
            let jsonData = JSON.stringify(parsedData);
            fs.writeFile('./db/blackList.json', jsonData, error => {
                if (error) console.error(error)
                else res.status(200).end();
            })
        }
    }) */
    res.cookie('refreshTokenBS', '', {
        maxAge: -1
    }).cookie('userIdBS', '', {
        maxAge: -1
    }).status(200).end();
})

function sendResponse(user, res) {
    let token = jwt.sign({ id: user.id }, secret.token, {
        expiresIn: '15m'
    });
    let refreshToken = jwt.sign({ id: user.id }, secret.refreshToken, {
        expiresIn: '30d'
    });
    const cookieExp = new Date(new Date().setMonth(new Date().getMonth() + 1));
    res.cookie('refreshTokenBS', refreshToken, {
        expires: cookieExp,
        httpOnly: true,
        sameSite: 'lax',
        path: '/'
    }).cookie('userIdBS', `${user.id}`);
    const userData = {
        name: user.name,
        surname: user.surname,
        email: user.email,
        userToken: token
    }
    res.status(200).send(userData);
}
