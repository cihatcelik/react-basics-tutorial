import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  
  styles = {
    fontWeigth : "bold",
    fontSize : 18
    };

    componentDidUpdate(prevProps,prevState){
      console.log("prevProps",prevProps);
      console.log("prevState",prevState);
      if(prevProps.counter.value !== this.props.counter.value){
        //API call and get new data from server - pagination vs
      }
    }

    componentWillUnmount(){
      console.log("Component - Unmount");
    }


  render() {
    
    return (
      <div >  
        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-seconday btn-sm">Increment</button>
        <button onClick={() =>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>

      </div>
    );
  }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value > 0 ? "primary" : "warning";
        return classes;
    }

  formatCount(){
    const{value} = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
