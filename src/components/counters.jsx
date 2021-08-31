import React, { Component } from "react";
import Counter from "./counter";

class Components extends Component {

  render() {
    const{onReset, counters,onDelete,onIncrement} = this.props;
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={onReset}
        >ResetCounters</button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement = {onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Components;
