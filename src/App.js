import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./Employee/EmpListing";
import EmpCreate from "./Employee/EmpCreate";
import EmpDetail from "./Employee/EmpDetail";
import EmpEdit from "./Employee/EmpEdit";
import ProductListing from "./Product/ProductListing";
import ProductCreate from "./Product/ProductCreate";
import ProductDetail from "./Product/ProductDetail";
import ProductEdit from "./Product/ProductEdit";

function App(){
    return(
    <div className="wrapper">
        <Sidebar/>
        <div className="main">
            <Navbar/>
            <main className="content">
                <div className="container-fluid p-0">
                    
                    {/* <Dashboard/> */}
                    <BrowserRouter>
                        <Routes>
                        <Route path="/" element={<Dashboard />}></Route>
                        
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
            </main>

            <Footer/>
        </div>
    </div>
    )
}

export default App