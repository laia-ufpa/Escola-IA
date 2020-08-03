import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Header';
import Home from "./pages/Home";
import Footer from './components/Footer';
import StudentRegister from './pages/StudentRegister';
import Team from './pages/Team';

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
      <Route path="/" exact={true} component={Home} />
      <Route path="/aluno" exact={true} component={StudentRegister} />
      <Route path="/time" exact={true} component={Team} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
