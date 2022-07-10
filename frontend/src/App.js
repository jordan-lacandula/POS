import { Component } from "react";
import HeaderComponent from "./sections/header";
import FooterComponent from "./sections/footer";
import ShopComponent from './components/shop.jsx'
import './App.css';

import { store } from "./stores/store.tsx";

class App extends Component{
  render() {
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <main>
          <ShopComponent></ShopComponent>
        </main>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default App;
