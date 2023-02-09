fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then((data) => showCategories(data));

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  const template_category = document.querySelector(".template_category").content;
  const clone1 = template_category.cloneNode(true);

  clone1.querySelector("a").textContent = cat.category;
  clone1.querySelector("a").href = `productlist.html?category${cat.category}`;
  document.querySelector(".category_flex").append(clone1);
}
