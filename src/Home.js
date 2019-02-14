import React, { Component } from "react";

class Home extends Component {
  render() {
    const placas = this.props.placas;
    const key = this.props.key;
    console.log(key);
    const displayPlacas = placas => {};

    return (
      <div className="dados">
        <h1>home component</h1>
        <h2>{displayPlacas}</h2>
        <button>adicionar placa </button>
      </div>
    );
  }
}

export default Home;
