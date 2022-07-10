import { Component } from 'react';
import { store } from "../stores/store.tsx";

class HeaderComponent extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();

        store.subscribe(() => {
            this.setState(store.getState());
        });
    }
    render() {
        return <header className="App-header">{this.state.shop.name}</header>;
    }
}

export default HeaderComponent;