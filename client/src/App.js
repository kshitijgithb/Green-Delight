import { Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Policy from "./pages/policy";

// import Contact from "./pages/Contact";
// import '@fortawesome/fontawesome-free/css/all.css';

import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Contact from "./pages/Contact";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPassword";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminRoute from "./components/Routes/AdminRoute";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/Admin/AdminOrders";
import Product from "./pages/Product";
import Home from "./pages/Home";

  // import { ToastContainer } from 'react-toastify';
  // import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />

        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
         <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
         <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
         <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/policy" element={<Policy/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Pagenotfound/>} />
      </Routes>
    </>
  );
}

export default App;