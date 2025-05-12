import "./App.css";
import { Routes, Route } from "react-router";

import Nav from "./components/navigation/Nav";
import Home from "./components/home/Home";
import MyProfile from "./components/my-profile/MyProfile";
import CatalogCars from "./components/catalog/catalog-cars/CatalogCars";
import Login from "./components/user-auth/Login";
import { UserContext } from "./components/contexts/UserContext";
import { useState } from "react";
import Register from "./components/user-auth/Register";
import Logout from "./components/user-auth/Logout";
import AuthGuard from "./components/guards/AuthGuard";
import Appointment from "./components/appointment/Appointment";
import AboutUs from "./components/about-us/AboutUs";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "./components/footer/Footer";
import BackToTopBtn from "./components/common-buttons/BackToTopBtn";
import CarDetails from "./components/car-details/CarDetails";

function App() {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route element={<AuthGuard />}>
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/car-club" element={<MyProfile />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="/catalog-cars" element={<CatalogCars />} />
        <Route path="/catalog-vans" element={<MyProfile />} />
        <Route path="/catalog-cars/:carId/details" element={<CarDetails />} />
        <Route path="/catalog-cars/:vanId/details" />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
      <BackToTopBtn />
    </UserContext.Provider>
  );
}

export default App;
