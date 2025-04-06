const getCategoryByTitle = (categories, title) => {
  const category = categories.find((c) => c.TEXT === title);

  if (category) {
    return category;
  }

  return null;
};

export default getCategoryByTitle;
