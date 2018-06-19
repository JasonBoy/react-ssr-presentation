import React, {Component} from 'react';
import {Fullpage, HorizontalSlider, Slide} from 'fullpage-react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

  }

  state = {
    fullPageOptions: null,
  };

  componentDidMount() {
    const fullPageOptions = {
      // for mouse/wheel events
      // represents the level of force required to generate a slide change on non-mobile, 10 is default
      scrollSensitivity: 7,

      // for touchStart/touchEnd/mobile scrolling
      // represents the level of force required to generate a slide change on mobile, 10 is default
      touchSensitivity: 7,
      scrollSpeed: 300,
      hideScrollBars: true,
      enableArrowKeys: true
    };

    const horizontalSliderProps = {
      name: 'horizontalSlider1', // name is required
      infinite: true, // enable infinite scrolling
    };

    horizontalSliderProps.slides = [
      <Slide> Slide 2.1 </Slide>,
      <Slide> Slide 2.2 </Slide>
    ];

    const slides = [
      <Slide> Slide 1 </Slide>,
      <HorizontalSlider {...horizontalSliderProps}></HorizontalSlider>,
      <Slide> Slide 3 </Slide>
    ];
    fullPageOptions.slides = slides;

    this.setState({fullPageOptions});
  }




  render() {
    if(!this.state.fullPageOptions) return null;
    return (
      <Fullpage {...this.state.fullPageOptions}></Fullpage>
    )
    ;
  }
}

export default App;
