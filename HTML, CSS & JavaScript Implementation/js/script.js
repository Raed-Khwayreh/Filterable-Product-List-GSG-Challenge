// Product Data Array
const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Smartphone", category: "Electronics", price: 500 },
  { name: "T-shirt", category: "Clothing", price: 30 },
  { name: "Jeans", category: "Clothing", price: 50 },
  { name: "Sofa", category: "Furniture", price: 500 },
  { name: "Chair", category: "Furniture", price: 170 },
  { name: "Lamp", category: "Furniture", price: 120 },
];

function setProducts(productArray) {
  const productDisplay = document.getElementById("productsSicton");
  productDisplay.innerHTML = "";
  productArray.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Category: ${product.category}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
        `;
    productDisplay.appendChild(productDiv);
  });
}

function setActive(id) {
  const buttons = document.querySelectorAll(".filter-section button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  const button = document.getElementById(`bt${id}`);
  button.classList.add("active");
}

function filterProducts(id, category) {
  if (category === "All") {
    setProducts(products);
    setActive(id);
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    setActive(id);
    setProducts(filteredProducts);
  }
}

window.onload = () => {
  setProducts(products);
};
