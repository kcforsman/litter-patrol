import React, { Component } from 'react';
import './App.css';
import Trash from './components/Trash.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bins: this.getBinsState(),
      points: 0
    };

    this.startGame();
    console.log(this.state.bins);
  }

// startGame()
// this function sets an interval that resets
// the state attr bins every 1.5 secs calling
// the getBinsState() with each interval
  startGame() {
    setInterval(() => {
      this.setState( {
        bins: this.getBinsState()
      });
    }, 1500);
  }

// getBinsState()
// method creates and fills an array of 9 elements of Javascript Objects
// with a key of isTrashVisible and true or false values
// based on a Math JavaScript method that generates 1 or 0
// randomly to determine the value
// then the method returns the filled bins array
  getBinsState() {
    let bins = [];
    for (let i = 0; i < 9; i++){
      bins.push({ isTrashVisible: (Math.round(Math.random()) ? true : false )});
    }

    return bins;
  }

  onTrashClicked = () => {
    // Fill this in!
  }

  render() {
    const bins = this.state.bins.map((bin, index) => {
      return (
        <Trash
        key={`trash-${index}`}
        isTrashVisible={bin.isTrashVisible}/>
      );
    });

    return (
      <div className="App">
        <section className="overall-data">
          <h1>Litter Patrol</h1>
          <h2>Points: { this.state.points }</h2>
        </section>

        <section className="bins">
          { bins }
        </section>
      </div>
    );
  }
}

export default App;
