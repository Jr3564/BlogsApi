const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'umsegredomuitoseguro';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (user) => jwt.sign({ data: user }, secret, jwtConfig);

const defaultCallbackError = (err, decoded) => {
  console.log(`service.validation.jwt: err: ${err} e decoded: ${decoded}`);
  return decoded.data;
};

const verify = (token, callback = defaultCallbackError) => jwt.verify(token, secret, callback);

const decode = (token) => jwt.decode(token, secret);

module.exports = { generateToken, verify, decode };
