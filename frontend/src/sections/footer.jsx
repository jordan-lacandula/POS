import { Component } from 'react';

class FooterComponent extends Component {

    render() {
        return <footer className="App-footer">Copyright &copy; {this.props.shop} 2022</footer>;
    }
}

export default FooterComponent;