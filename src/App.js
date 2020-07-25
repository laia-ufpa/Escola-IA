import React from 'react';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PersonIcon from '@material-ui/icons/Person';

function App() {
  return (
    <main className="container">
      <div className="row mt-5">
        <div className="col-12 col-md d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body text-center">
              <h5 className="card-title">Escola</h5>
              <p><LocationCityIcon style={{ fontSize: 80 }} /></p>
              <a href="/" className="btn btn-primary">Cadastrar</a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body text-center">
              <h5 className="card-title">Aluno</h5>
              <p><PersonIcon style={{ fontSize: 80 }} /></p>
              <a href="/aluno" className="btn btn-primary">Cadastrar</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
