import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import { useState } from 'react';
import Backdrop from './components/Backdrop';

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div className="app">
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
