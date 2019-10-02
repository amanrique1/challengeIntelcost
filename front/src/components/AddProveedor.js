import React, { Component } from 'react';

class AddProveedor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombres: "",
            apellidos: "",
            edad: "",
            correo_electronico: "",
            celular: "",
            telefono: "",
            registro: "",
            addFunction: props.addFunction
        };
        this.addMe = this.addMe.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }
    addMe() {
        if (this.state.nombres !== "" && this.state.apellidos !== "" && this.state.edad !== "" && this.state.correo_electronico !== "" && this.state.celular !== "" && this.state.telefono !== "") {
    
            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + ' ' + time;
            this.state.addFunction({
                nombres: this.state.nombres,
                apellidos: this.state.apellidos,
                edad: this.state.edad,
                correo_electronico: this.state.correo_electronico,
                celular: this.state.celular,
                telefono: this.state.telefono,
                registro:dateTime
            });
        } 
    }
    changeValue(e) {
        if (e.target.name === "nombres") {
            this.setState({
                nombres: e.target.value
            });
        }  else if (e.target.name === "apellidos") {
            this.setState({
                apellidos: e.target.value
            });
        }else if (e.target.name === "edad") {
            this.setState({
                edad: e.target.value
            });
        }
        else if (e.target.name === "correo_electronico") {
            this.setState({
                correo_electronico: e.target.value
            });
        }
        else if (e.target.name === "celular") {
            this.setState({
                celular: e.target.value
            });
        }
        else {
            this.setState({
                telefono: e.target.value
            });
        }
    }

    render() {
        return (
<div className="card">
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="nombres"
              className="form-control"
              value={this.state.nombres}
              onChange={this.changeValue}
              placeholder="nombres"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="apellidos"
              className="form-control"
              value={this.state.apellidos}
              onChange={this.changeValue}
              placeholder="apellidos"
              />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="edad"
              className="form-control"
              value={this.state.edad}
              onChange={this.changeValue}
              placeholder="edad"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="correo_electronico"
              className="form-control"
              value={this.state.correo_electronico}
              onChange={this.changeValue}
              placeholder="email"
              />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="celular"
              className="form-control"
              value={this.state.celular}
              onChange={this.changeValue}
              placeholder="celular"
              />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="telefono"
              className="form-control"
              value={this.state.telefono}
              onChange={this.changeValue}
              placeholder="telefono"
              />
          </div>
          <button type="submit" onClick={this.addMe} className="btn btn-success">
            Guardar
          </button>
        </div>
      </div>
        );
    }
}

export default AddProveedor;