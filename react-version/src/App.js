import { useState } from "react";
import "./App.css";
import { FilterSection, ProductList } from "./components";
import { productsList } from "./mocks";

function App() {
  const [filteredList, setFilteredList] = useState(productsList);
  function handleChangeCategories(categoryName) {
    if (categoryName === "All") setFilteredList(productsList);
    else {
      const filteredProducts = productsList.filter(
        (product) => product.category === categoryName
      );
      setFilteredList(filteredProducts);
    }
  }
  return (
    <div className="container">
      <h1>Product List</h1>
      <FilterSection handleChangeCategories={handleChangeCategories} />
      <ProductList list={filteredList} />
    </div>
  );
}

export default App;
