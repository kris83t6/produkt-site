const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

//henter data
fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((response) => response.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //Fange template
  const template = document.querySelector("#smallProductTemplate").content;
  //lave kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("p").textContent = product.brandname;
  copy.querySelector(".category").textContent = product.catergory;
  copy.querySelector(".price").textContent = product.price + " kr";
  copy.querySelector(".img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector(".img").classList.add("sold");
    copy.querySelector(".discount").classList.add("vanish");
    copy.querySelector(".soldout").textContent = "Sold Out";
  }

  if (product.discount) {
    copy.querySelector(".discount").textContent = "Spar " + product.discount + " kr";
  }

  copy.querySelector(".read_more").setAttribute("href", `product.html?id=${product.id}`);
  
  //appende
  document.querySelector(".grid2").appendChild(copy);
}



/*
{
  "id": 1165,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2013,
  "usagetype": "Sports",
  "productdisplayname": "Mean Team India Cricket Jersey",
  "price": 2495,
  "discount": 45,
  "brandname": "Nike",
  "soldout": 0
}
*/
