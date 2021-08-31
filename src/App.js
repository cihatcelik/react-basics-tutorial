import React, { Component } from 'react';
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Counter from "./components/counter";


class App extends Component {

  constructor(){
    super();
    console.log('App - Constructor');
    //You can do assign a value to state object.
    //this.state = this.props.someValue
  }

  componentDidMount(){
    console.log('App - Mounted');
    //API Call
    //this.setState({result})
  }

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 4 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterID) => {
    // alert('Delete Event Called ' + counterID);
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
  };
  handleIncrement=(counter)=>{
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = {...counter};
     counters[index].value++;
     this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  };
  render() { 
    console.log('App - Rendered');
    return (  <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
      <main className="container">
        <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete}/>
      </main>
    </React.Fragment> );
  }
}
 
export default App;
