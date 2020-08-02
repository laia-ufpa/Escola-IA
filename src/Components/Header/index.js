import $ from 'jquery';
import React, { Component } from 'react';
import logo from '../../logo.png'


const Button = (props) => {
    return (
        <li className="nav-item active">
            <a className="nav-link" href={props.route} >{props.name}</a>
        </li>
    );
}

const Login = () => {
 return(
    <div id="modal" className="modal" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content container">
            <form className="form-signin text-center">
                <img className="mb-4 mt-2 shadow-lg p-0 mb-5 bg-white rounded rounded-circle" src={logo} alt="" width="90" height="90" />
                <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                <input type="text" id="inputEmail" className="form-control mb-2" placeholder="Usuário" />
                <input type="password" id="inputPassword" className="form-control mb-2" placeholder="Senha" />
                <button className="btn btn-lg btn-primary btn-block mt-5 mb-5" type="submit">Entar</button>
            </form>
        </div>
    </div>
</div>
 );
}


class Header extends Component {
    modaLogin(e) {
        e.preventDefault();
        $('#modal').modal('show')
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">EscoLA-IA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <Button name="Sobre" route="/" />
                    </ul>
                    <div className="d-flex flex-row bd-highlight mb-3">
                        <button type="button" className="btn btn-dark" onClick={this.modaLogin}>Login</button>
                    </div>
                </div>
                <Login/>
            </nav>
        );
    }
}

export default Header;