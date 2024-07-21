import  { Component } from "react";

interface Istate {
  name: string;
}

export default class App extends Component<any, Istate> {
  state = {
    name: "kerwin",
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              name: "xiaoming",
            });
          }}
        >
          click
        </button>
        {this.state.name.substring(0, 1).toUpperCase() +
          this.state.name.substring(1)}
      </div>
    );
  }
}
