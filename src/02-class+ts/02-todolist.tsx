import React, { Component } from "react";
interface Istate {
  text: string;
  list: string[];
}

export default class App extends Component<any, Istate> {
  state = {
    text: "",
    list: [],
  };

  myref = React.createRef<HTMLInputElement>();
  render() {
    return (
      <div>
        <label htmlFor="myInput">任务描述</label>
        <input
          placeholder="请输入任务描述"
          ref={this.myref}
          type="text"
          value={this.state.text}
          onChange={(evt) => {
            this.setState({
              text: evt.target.value,
            });
          }}
        />
        <button
          type="button"
          onClick={() => {
            // console.log(this.state.text);
            // console.log((this.myref.current as HTMLInputElement).value);
            this.setState({
              list: [
                ...this.state.list,
                (this.myref.current as HTMLInputElement).value,
              ],
            });
          }}
        >
          click
        </button>
        {this.state.list.map((item) => (
          <ul>
            <li key={item}>{item}</li>
          </ul>
        ))}
      </div>
    );
  }
}
