import "./App.css";
import { FilterSection, ProductList } from "./components";

function App() {
  return (
    <div className="container">
      <h1>Product List</h1>
      <FilterSection />
      <ProductList />
    </div>
  );
}

export default App;
