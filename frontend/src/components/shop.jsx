import { Component } from "react";

import { store } from "../stores/store.tsx";
import { updateShopName } from "../reducers/shopReducer.ts"

class ShopComponent extends Component {
    constructor(props){
        super(props);
        this.state = store.getState().shop;

        store.subscribe(() => {
            this.setState(store.getState().shop);
        });
    }
    handleClick() {
        store.dispatch(updateShopName({name:document.getElementById("newshop").value}))
    }
    render() {
        return <>
            <div>Welcome to { this.state.name } shop</div>
            <input type="text" name="newShopName" id="newshop" />
            <button className="btn" onClick={this.handleClick}>Update</button>
        </>
            
    }
}

export default ShopComponent;