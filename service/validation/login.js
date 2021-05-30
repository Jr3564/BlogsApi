module.exports = {
  emailIsNotBlank: (email) => {
    if (email === '') {
      const message = '"email" is not allowed to be empty';
      throw new Error(message);
    }
  },
  email: (email) => {
    if (!email) {
      const message = '"email" is required';
      throw new Error(message);
    }
  },
  passwordIsNotBlank: (password) => {
    if (password === '') {
      const message = '"password" is not allowed to be empty';
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
