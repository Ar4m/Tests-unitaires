import React, { Component } from "react";

export default class Button extends Component {

  render() {
   
    return (
      <div>
          <button data-testid="button">{this.props.label}</button>
      </div>

    );
  }
}
