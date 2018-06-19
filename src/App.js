import React, {Component} from 'react';
import g from 'glamorous';
import {Fullpage, HorizontalSlider, Slide} from 'fullpage-react';
import './App.css';
import logo from './logo.svg';

const Wrapper = g.div({
  position: 'absolute',
  margin: 0,
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
});

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

    fullPageOptions.slides = [
      this.getTitle(),
      this.getTableOfContents(),
      this.historyOfWebApps(),
      <HorizontalSlider {...horizontalSliderProps}></HorizontalSlider>,
      <Slide> Slide 3 </Slide>
    ];

    this.setState({fullPageOptions});
  }

  getTitle() {
    const ele = (
      <Wrapper>
        <g.H1 margin={0}>
          <g.Img verticalAlign="middle" src={logo} className="App-logo" alt="logo" />
          <g.Span verticalAlign="middle">React Server Side Rendering</g.Span>
        </g.H1>
      </Wrapper>
    );
    return this.genSlide(ele);
  }

  getTableOfContents() {
    const ele = (
      <Wrapper>
        <g.Ul fontSize={24} lineHeight={2.4}>
          <g.Li>📜 Brief History of Web Apps</g.Li>
          <g.Li>🚨 SPA Issues</g.Li>
          <g.Li>🎉 SSR Comes to Rescue</g.Li>
          <g.Li>
            ✅ React SSR Demo:
            <g.Ul fontSize={16}>
              <g.Li>Code-Splitting with React-Loadable</g.Li>
              <g.Li>Make it Work for SSR</g.Li>
              <g.Li>Use React-16 Streaming API</g.Li>
            </g.Ul>
          </g.Li>
          <g.Li>🦄 What's Next?</g.Li>
        </g.Ul>
      </Wrapper>
    );
    return this.genSlide(ele);
  }

  historyOfWebApps() {
    const ele = (
      <Wrapper>

      </Wrapper>
    );
    return this.genSlide(ele);
  }

  genSlide(slide) {
    return (
      <Slide>
        {slide}
      </Slide>
    );
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
