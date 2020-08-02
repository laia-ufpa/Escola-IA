import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import Header from './Components/Header';
import Footer from './Components/Footer';
import StudentRegister from './Components/StudentRegister';
import Team from './Components/Team';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';








ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/aluno" component={StudentRegister} />
      <Route path="/time" exact={true} component={Team} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
