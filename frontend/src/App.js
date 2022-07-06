import { Component } from "react";

import HeaderComponent from "./sections/header";
import FooterComponent from "./sections/footer";
import ShopComponent from './components/shop'
import './App.css';

class App extends Component{
  constructor () {
    super();
    this.state = {
      shop: {
        id: 1,
        name: "Nekobiz"
      }
    }
  }

  getShopName() {
    return this.state.shop.name;
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent shop={this.getShopName()}></HeaderComponent>
        <main>
          <ShopComponent shop={this.getShopName()}></ShopComponent>
        </main>
        <FooterComponent shop={this.getShopName()}></FooterComponent>
      </div>
    );
  }
}

export default App;
