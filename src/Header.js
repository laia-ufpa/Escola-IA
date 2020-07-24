import React, { Component } from 'react';


const Button = (props) => {
    return (
        <li className="nav-item active">
            <a className="nav-link" href={props.route} >{props.name}</a>
        </li>
    );
}

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">EscoLA-IA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <Button name="Início" route="/" />
                        <Button name="Sobre" route="/" />
                    </ul>
                </div>
            </nav>

        );
    }
}

export default Header;