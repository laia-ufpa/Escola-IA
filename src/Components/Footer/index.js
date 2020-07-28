import React, { Component } from 'react';
import logo from '../../logo.png'


class Footer extends Component {
    render() {
        return (
            <footer className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md mt-3">
                        <h5>EscoLA-IA</h5>
                        <img src={logo} width="70"/>
                        <p>Desenvolvido pela <strong>L</strong>iga <strong>A</strong>cadêmica de <strong>I</strong>nteligêcia <strong>A</strong>rtficial - (<strong>LAIA</strong>)</p>
                    </div>
                    <div className="col-12 col-md mt-3">
                        <h5>Sobre</h5>
                        <a href="/time">Time</a>
                    </div>
                </div>
            </footer >
        );
    }

}

export default Footer;