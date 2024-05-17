const categoriesWithId = document.querySelector('#categories')
const categoriesItem = categoriesWithId.querySelectorAll('li.item')
console.log(`Number of categories: ${categoriesItem.length}`);
categoriesItem.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoriesElements = category.querySelectorAll('li');
    console.log(` Category: ${categoryTitle}`);
    console.log(`Elements: ${categoriesElements.length}`);
});    