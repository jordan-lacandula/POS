import { Component } from "react";

import { store } from "../stores/store.tsx";
import { updateShopName } from "../reducers/shopReducer.ts"

class ShopComponent extends Component {

    handleClick() {
        store.dispatch(updateShopName(document.getElementById("newshop").value))
    }
    render() {
        return <>
            <div>Welcome to { this.props.shop } shop</div>
            <input type="text" name="newShopName" id="newshop" />
            <button className="btn" onClick={this.handleClick}>Update</button>
        </>
            
    }
}

export default ShopComponent;