import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./Employee/EmpListing";
import EmpCreate from "./Employee/EmpCreate";
import EmpDetail from "./Employee/EmpDetail";
import EmpEdit from "./Employee/EmpEdit";
import ProductListing from "./Product/ProductListing";
import ProductCreate from "./Product/ProductCreate";
import ProductDetail from "./Product/ProductDetail";
import ProductEdit from "./Product/ProductEdit";

function App() {
  return (
    <div class="hero_area">
      {/* header section strats */}
      <header class="header_section">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
              <h3>Bolang</h3>
              <span> gunung</span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse ml-auto"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav  ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/product">
                    {" "}
                    Product{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/employee">
                    {" "}
                    Employee{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="event.html">
                    {" "}
                    Member{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">
                    Transaction
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* end header section */}
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<ProductListing />}></Route>
          <Route path="/product/create" element={<ProductCreate />}></Route>
          <Route path="/product/detail/:productid" element={<ProductDetail />}></Route>
          <Route path="/product/edit/:productid" element={<ProductEdit />}></Route>

          <Route path="/employee" element={<EmpListing />}></Route>
          <Route path="/employee/create" element={<EmpCreate />}></Route>
          <Route path="/employee/detail/:empid" element={<EmpDetail />}></Route>
          <Route path="/employee/edit/:empid" element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
