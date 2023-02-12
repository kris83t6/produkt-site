fetch("https://kea-alt-del.dk/t7/api/categories")
  .then(response => response.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory)
}

function showCategory(cat) {
    //fanger vores template
  const template_category = document.querySelector(".template_category").content;

  //cloner
  const clone = template_category.cloneNode(true);

  //ændrer indhold
  clone.querySelector("a").textContent = cat.category;
  clone.querySelector("a").href = `productlist.html?category=${cat.category}`;

  //appender
  document.querySelector(".category_flex").append(clone);
}
