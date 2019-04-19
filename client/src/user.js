import React, { Component } from "react";
import "./App.css";
export default class User extends Component {
  render() {
    return (
      <div>
        <form action="/join" method="POST" className="input-section">
          <input type="email" name="email" />
          <input type="submit" value="Join Now" />
        </form>
      </div>
    );
  }
}
