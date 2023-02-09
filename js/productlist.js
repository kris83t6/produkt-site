fetch("https://kea-alt-del.dk/t7/api/products")
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
  copy.querySelector(".price").textContent = product.price + "kr";
  copy.querySelector(".img").src =`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  if(product.soldout){
    //produktet er udsolgt
    copy.querySelector("article").classList.add("sold")
  }
  //appende
  document.querySelector("main").appendChild(copy);
}

/*
  <article class="smallProduct">
        <img src="https://kea-alt-del.dk/t7/images/webp/1000/1529.webp" alt="#">
        <p>Puma</p>
        <h3>Casual apparel - T-shirt</h3>
        <p>1.899,00 kr</p>
    </article>
    */

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
