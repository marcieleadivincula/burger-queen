import React, { Component } from 'react';


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
class Home extends Component {
  state = {
    buy: []
  }

  handleClickBuy = (product) => {
    this.setState({
      buy: this.state.buy.concat(product)
    });
  }

  render() {
    console.log(this.state.buy);
    return (
      <div className="card-content">
        <span className="card-title">Pedido nº </span>
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
    );
  }

}

export default Home;
