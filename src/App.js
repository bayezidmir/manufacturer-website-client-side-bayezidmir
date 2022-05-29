import "./App.css";
import Navbar from "./Components/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Footer from "./Components/Shared/Footer";
import RequireAuth from "./Components/Hooks/RequireAuth";
import { publicRoutes } from "./Components/Routes/publicRoutes";
import { privetRoutes } from "./Components/Routes/PrivetRoutes";
import IsAdmin from "./Components/Hooks/IsAdmin";
import AddProduct from "./Components/Pages/Dashboard/AddProduct";
import AllUser from "./Components/Pages/Dashboard/AllUser";
import Admin from "./Components/Pages/Dashboard/Admin";
import MyOrder from "./Components/Hooks/MyOrder";
import AllPayments from "./Components/Pages/Dashboard/AllPayments";
import AllProducts from "./Components/Pages/Dashboard/AllProducts";
import Payment from "./Components/Hooks/Payment";
import EditProfile from "./Components/Pages/Dashboard/EditProfile";
import MyProfile from "./Components/Pages/Dashboard/MyProfile";
import Review from "./Components/Pages/Dashboard/Review";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          {publicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route element={<RequireAuth />}>
            {privetRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<MyOrder />} />
              <Route path="my-profile" element={<MyProfile />} />
              <Route path="my-order" element={<MyOrder />} />
              <Route path="review" element={<Review />} />
              <Route path="edit-profile" element={<EditProfile />} />
              <Route path="payment/:id" element={<Payment />} />
              <Route element={<IsAdmin />}>
                <Route path="add-service" element={<AddProduct />} />
                <Route path="all-admin" element={<Admin />} />
                <Route path="all-user" element={<AllUser />} />
                <Route path="all-payments" element={<AllPayments />} />
                <Route path="all-products" element={<AllProducts />} />
              </Route>
            </Route>
          </Route>
        </Routes>
        <Footer />
        <Toaster />
      </Navbar>
    </div>
  );
}

export default App;
