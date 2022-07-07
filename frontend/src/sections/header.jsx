import { Component } from 'react';

class HeaderComponent extends Component {

    render() {
        return <header className="App-header">{this.props.shop}</header>;
    }
}

export default HeaderComponent;