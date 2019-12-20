const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authenticate = require('../auth/authenticate-middleware.js');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, usersRouter);
server.use('/api/jokes', authenticate, jokesRouter);

server.get('/', (req, res) => {
    res.status(200)
        .json({ message: 'Welcome to the jokes API' })
});

module.exports = server;
