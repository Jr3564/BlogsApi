const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'umsegredomuitoseguro';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (user) => jwt.sign({ data: user }, secret, jwtConfig);

const decode = (token) => jwt.verify(token, secret);

module.exports = { generateToken, decode };
