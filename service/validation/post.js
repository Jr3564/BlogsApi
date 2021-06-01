module.exports = {
  title: (title) => {
    if (!title) {
      const message = '"title" is required';
      throw new Error(message);
    }
  },
  content: (content) => {
    if (!content) {
      const message = '"content" is required';
      throw new Error(message);
    }
  },
  categoryIds: (categoryIds) => {
    if (!categoryIds) {
      const message = '"categoryIds" is required';
      throw new Error(message);
    }
  },
  notEditCategoryId: (categoryIds) => {
    if (categoryIds) throw new Error('Categories cannot be edited');
  },
};
