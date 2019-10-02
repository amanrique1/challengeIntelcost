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
  removeProveedor(index,pId) {

    fetch('/delete.php', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: pId })
    })
      const provs=Object.assign([],this.state.proveedores);
      provs.splice(index,1);
      console.log(provs)
      this.setState({proveedores:provs})

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
