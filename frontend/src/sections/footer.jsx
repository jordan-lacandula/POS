import { Component } from 'react';
import { store } from "../stores/store.tsx";

class FooterComponent extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();

        store.subscribe(() => {
            this.setState(store.getState());
        });
    }
    render() {
        return <footer className="App-footer">Copyright &copy; { this.state.shop.name } 2022</footer>;
    }
}

export default FooterComponent;