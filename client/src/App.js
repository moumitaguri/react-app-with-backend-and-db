import React, { Component } from "react";
import "./App.css";
import User from "./user";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", count: 0, value: "" };
  }

  componentDidMount() {
    fetch("/userCount")
      .then(res => res.text())
      .then(count => {
        this.setState({ count: count });
      });
  }

  submit(email) {
    fetch("/join", {
      method: "POST",
      body: email
    })
      .then(res => res)
      .then(count => {
        this.setState(count);
      });
  }

  render() {
    return (
      <main>
        <h1>JOIN US</h1>
        <div>{this.state.count}</div>
        <div className="join">
          <User />
        </div>
      </main>
    );
  }
}

export default App;
