import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./sections/header";
import FooterComponent from "./sections/footer";

import ShopComponent from './components/shop.jsx'
import DashboardComponent from './components/dashboard'

import './App.css';

class App extends Component{
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderComponent></HeaderComponent>
          <main>
            <Routes>
              <Route exact path="/shop" element={<ShopComponent/>}/>
              <Route exact path="/dashboard" element={<DashboardComponent/>} />
            </Routes>
          </main>
          <FooterComponent></FooterComponent>
        </div>
      </Router>
    );
  }
}

export default App;