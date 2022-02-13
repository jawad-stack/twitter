import React, { Component } from "react";
import Slider from "react-rangeslider";

class HorizontalCustomLabels extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      horizontal: 10,
    };
  }

  handleChangeHorizontal = (value) => {
    this.setState({
      horizontal: value,
    });
  };

  render() {
    const { horizontal } = this.state;
    const horizontalLabels = {
      0: "1 month",
      25: "6 Months",
      50: "1 Year",
      75: "1.5",
      100: "2+ Years",
    };
    const formatkg = (value) => value + " kg";
    return (
      <div className="slider custom-labels">
        <Slider
          min={0}
          max={100}
          value={horizontal}
          labels={horizontalLabels}
          format={formatkg}
          handleLabel={horizontal}
          onChange={this.handleChangeHorizontal}
        />
        <div className="value">{formatkg(horizontal)}</div>
        <hr />
        {/* <Slider
          value={vertical}
          orientation="vertical"
          labels={verticalLabels}
          handleLabel={vertical}
          format={formatPc}
          onChange={this.handleChangeVertical}
        />
        <div className="value">{formatPc(vertical)}</div> */}
      </div>
    );
  }
}

export default HorizontalCustomLabels;
