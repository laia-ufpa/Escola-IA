import $ from 'jquery';
import React from 'react';
import logo from '../../images/logo.png'


const Button = (props) => {
    return (
        <li className="nav-item active">
            <a className="nav-link" href={props.route} >{props.name}</a>
        </li>
    );
}

const Login = () => {
    return (
        <div id="modal" className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content text-center">
                    <form className="form-signin">
                        <button type="button" className="close mr-2 mt-1" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <img className="mt-5 shadow-lg bg-white rounded rounded-circle" src={logo} alt="" width="90" height="90" />
                        <div className="container p-5">
                            <label className="font-weight-bold">Usuário</label>
                            <input type="text" id="inputEmail" className="form-control mb-2" />
                            <label className="font-weight-bold">Senha</label>
                            <input type="password" id="inputPassword" className="form-control mb-5" />
                            <button className="btn btn-lg btn-primary btn-block mb-5" type="submit">Entar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

function Header() {
    function modaLogin(e) {
        e.preventDefault();
        $('#modal').modal('show')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <a className="navbar-brand" href="/">EscoLA-IA</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto"></ul>
                <div className="d-flex flex-row bd-highlight mb-3">
                    <button type="button" className="btn btn-dark" onClick={modaLogin}>Login</button>
                </div>
            </div>
            <Login />
        </nav>
    );
}

export default Header;