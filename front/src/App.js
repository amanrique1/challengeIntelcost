import React from 'react';
import axios from 'axios';
import Proveedor from './components/Proveedor'
import AddProvedor from './components/AddProveedor'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      proveedores: []
    }
    this.addProveedor = this.addProveedor.bind(this);
    this.removeProveedor = this.removeProveedor.bind(this);
  }

  componentDidMount() {

    axios.get('/read.php').then(response => response.data)
      .then((data) => {
        this.setState({
          proveedores: data.records
        })
      });

  }
  addProveedor(prov) {
    this.setState({
      proveedores: [...this.state.proveedores, prov]
    });
    fetch('/create.php', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prov)
    }).then(res => res.json())
      .then(res => console.log(res));
  }
  removeProveedor(pId) {
    let provs = [];
    var tam = this.state.proveedores.length;
    for (var i = 0; i < tam; i++) {
      if (this.state.proveedores[i].id !== pId) provs.push(this.state.proveedores[i]);
    }
    this.setState({
      proveedores: provs
    })
    fetch('/delete.php', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: pId })
    })
      .then(res => res.text()) // OR res.json()
      .then(res => console.log(res))

  }

  render() {
    return (<div>
      <div className="container">
        <div className="row mt-4">

          <div className="col-md-3 text-center">
            <AddProvedor addFunction={this.addProveedor} />
          </div>

          <div className="col-md-9">
            <div className="row">
              {this.state.proveedores.map((e, i) => <Proveedor key={i} prov={e} index={i} remove={this.removeProveedor} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

}
