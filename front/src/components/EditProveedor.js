import React, { Component } from 'react';

class EditProveedor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.prov.id,
            nombres: props.prov.nombres,
            apellidos: props.prov.apellidos,
            edad: props.prov.edad,
            correo_electronico: props.prov.correo_electronico,
            celular: props.prov.celular,
            telefono: props.prov.telefono,
            registro: props.prov.registro,
            editFunction:props.editFunction
        };
        this.editMe = this.editMe.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }
    editMe() {
        if (this.state.nombres !== "" && this.state.apellidos !== "" && this.state.edad !== "" && this.state.correo_electronico !== "" && this.state.celular !== "" && this.state.telefono !== "") {
    
            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + ' ' + time;
            this.state.editFunction({
                id:this.state.id,
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

            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Editar Proveedor</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
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
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary" onClick={this.editMe} data-dismiss="modal">Guardar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProveedor;