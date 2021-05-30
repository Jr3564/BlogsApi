const isValidEmailFunc = require('./email');

module.exports = {
  displayName: (name) => {
    if (name.length < 8) {
      const message = '"displayName" length must be at least 8 characters long';
      throw new Error(message);
    }
  },
  isValidEmail: (email) => {
    if (!isValidEmailFunc(email)) {
      const message = '"email" must be a valid email';
      throw new Error(message);
    }
  },
  email: (email) => {
    if (!email) {
      const message = '"email" is required';
      throw new Error(message);
    }
  },
  isPasswordValid: (password) => {
    if (password.length < 6) {
      const message = '"password" length must be 6 characters long';
      throw new Error(message);
    }
  },
  password: (password) => {
    if (!password) {
      const message = '"password" is required';
      throw new Error(message);
    }
  },
};
