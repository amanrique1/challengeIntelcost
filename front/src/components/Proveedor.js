import React, { Component } from 'react';
import './Styles.css';
import EditProveedor from './EditProveedor'

class Proveedor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index:props.index,
      id: props.prov.id,
      nombres: props.prov.nombres,
      apellidos: props.prov.apellidos,
      edad: props.prov.edad,
      correo_electronico: props.prov.correo_electronico,
      celular: props.prov.celular,
      telefono: props.prov.telefono,
      registro: props.prov.registro
    };
    this.deleteMe = this.deleteMe.bind(this);
    this.editMe = this.editMe.bind(this);
  }
  deleteMe() {
    this.props.remove(this.state.id)
  }
  editMe(prov) {
    console.log(prov)
    this.setState({
      nombres: prov.nombres,
      apellidos: prov.apellidos,
      edad: prov.edad,
      correo_electronico: prov.correo_electronico,
      celular: prov.celular,
      telefono: prov.telefono,
      registro: prov.registro
    })
    fetch('/update.php', {
      method: 'put',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prov)
    }).then(res => res.json())
      .then(res => console.log(res));
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="card mt-4">
          <div className="card-title text-center">
            <h3>{this.state.nombres} {this.state.apellidos}</h3>
          </div>
          <div className="card-body">
            <span>Edad:</span>{this.state.edad}<br />
            <span>Email:</span>{this.state.correo_electronico}<br />
            <span>Celular:</span>{this.state.celular}<br />
            <span>Telefono:</span>{this.state.telefono}<br />
            <span>Registro:</span>{this.state.registro}<br />
          </div>
          <div className="card-footer">

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >
              Editar</button>
            <button
              className="btn btn-danger"
              onClick={this.deleteMe}>
              Eliminar
                </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <EditProveedor editFunction={this.editMe} prov={this.state}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Proveedor;