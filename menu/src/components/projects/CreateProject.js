import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const products = [
  {
    name: "Café Americano",
    price: 5,
    period: "breakfast",
    type: "bebida"
  },
  {
    name: "Café com leite",
    price: 7,
    period: "breakfast",
    type: "bebida"
  },
  {
    name: "Sanduíche de presunto e queijo",
    price: 10,
    period: "breakfast"
  },
  {
    name: "Suco de fruta natural",
    price: 7,
    period: "breakfast",
    type: "bebida"
  },
  {
    name: "Hambúrguer simples",
    price: 10,
    period: "lunch and dinner",
    beef: [
      "carne bovina",
      "frango",
      "vegetariano"
    ],
    additional: [
      {
        queijo: 1,
        ovo: 1
      }
    ]
  },
  {
    name: "Hambúrguer duplo",
    price: 15,
    period: "lunch and dinner",
    beef: [
      "carne bovina",
      "frango",
      "vegetariano"
    ],
    additional: [
      {
        queijo: 1,
        ovo: 1
      }
    ]
  },
  {
    name: "Batata frita",
    price: 5,
    period: "lunch and dinner",
  },
  {
    name: "Anéis de cebola",
    price: 5,
    period: "lunch and dinner",
  },
  {
    name: "Água 500ml",
    price: 5,
    period: "lunch and dinner",
    type: "bebida"
  },
  {
    name: "Água 750ml",
    price: 7,
    period: "lunch and dinner",
  },
  {
    name: "Bebida gaseificada 500ml",
    price: 7,
    period: "lunch and dinner",
    type: "bebida"
  },
  {
    name: 'Bebida gaseificada 750ml',
    price: 10,
    period: "lunch and dinner",
    type: "bebida",
  }
];
class CreateProject extends Component {
  state = {
    client: '', //clientName
    table: '',//tableNumber
    buy: []
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
  }

  handleClickBuy = (product) => {
    this.setState({
      buy: this.state.buy.concat(product)
    });
  }
  render() {
    console.log(this.state.buy);
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Novo Pedido</h5>
          <div className="input-field">
            <input type="text" id='client' onChange={this.handleChange} />
            <label htmlFor="client">Cliente</label>
          </div>
          <div className="input-field">
            <textarea id="table" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="table">Mesa</label>
          </div>
        
          <div className="input-field">
          <h5 className="grey-text text-darken-3">Menu:</h5>
            <ul className="online-users">
              {
                products.map((product, i) => {
                  return <li key={i}>
                    <button onClick={() => this.handleClickBuy(product)}>{product.name}</button>
                  </li>
                })
              }
            </ul>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    products: state.firestore.ordered.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'products', limit: 3, orderBy: ['time', 'desc'] }
  ])
)(CreateProject);