import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const Select = () => {
    let states = ["Acre",
        "Alagoas",
        "Amapá",
        "Amazonas",
        "Bahia",
        "Ceará",
        "Espírito Santo",
        "Goiás",
        "Maranhão",
        "Mato Grosso",
        "Mato Grosso do Sul",
        "Minas Gerais",
        "Pará",
        "Paraíba",
        "Paraná",
        "Pernambuco",
        "Piauí",
        "Rio de Janeiro",
        "Rio Grande do Norte",
        "Rio Grande do Sul",
        "Rondônia",
        "Roraima",
        "Santa Catarina",
        "São Paulo",
        "Sergipe",
        "Tocantins",
        "Distrito Federal"];

    return (
        states.map((state) => {
            return (<option>{state}</option>)
        })
    );
}



function StudentRegister() {
    return (
        <div className="container mt-5">
            <form>
                <div className="text-center mb-5"><AccountCircleIcon style={{ fontSize: 100 }} /></div>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <label for="inputEmail4">Nome Completo</label>
                        <input type="name" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="form-group col-md-5">
                        <label for="inputPassword4">Escola</label>
                        <input type="name" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Idade</label>
                        <input type="number" min="0" max="100" className="form-control" id="inputZip" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="inputState">Estado</label>
                        <select id="inputState" className="form-control">
                            <option selected>Selecione</option>
                            <Select />
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputCity">Cidade</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputZip">Bairro</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}

export default StudentRegister;