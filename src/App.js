import React, {Component} from 'react';
import {css} from 'glamor';
import g from 'glamorous';
import {Fullpage, HorizontalSlider, Slide} from 'fullpage-react';
import './App.css';
import logo from './logo.svg';
import gmailLogo from './assets/images/gmail.png';
import jqLogo from './assets/images/jquery.jpg';
import dev2010 from './assets/images/web-dev-2010.jpeg';
import dev2010tools2 from './assets/images/web-dev-2010-tools2.jpg';
import dev2018tools from './assets/images/web-dev-2018-tools.png';
import dev2018tools2 from './assets/images/web-dev-2018-tools2.png';
import indexHtml from './assets/images/index.html.png';
import csrDiagram from './assets/images/csr.png';
import ssrDiagram from './assets/images/ssr.png';
import ssrCompare from './assets/images/ssr-compare.png';
import appRoutes from './assets/images/app-routes.png';
import spaLoadable from './assets/images/spa-loadable.png';
//code images
import codeAppWithSSR from './assets/images/app-with-ssr.png';
import codeSSRJS from './assets/images/ssr.js.png';
import codeKoaInit from './assets/images/koa-init.png';
import codeGetInitState from './assets/images/get-init-state-client.png';
import codeInitState from './assets/images/init-state.png';
import codeWebpackDevLoadable from './assets/images/webpack-dev-loadable.png';
import codeWebpackSSR from './assets/images/webpack-ssr.png';
import codeBabelrc from './assets/images/babelrc.png';
import codeStreamingApi from './assets/images/streamingapi.png';
import codeManifest from './assets/images/manifest.png';
import codeReactHelmet from './assets/images/react-helmet.png';
import codeReactHelmetAsync from './assets/images/react-helmet-async.png';
//ssr frameworks
import logoNextjs from './assets/images/frameworks/nextjs.png';
import logoRazzlejs from './assets/images/frameworks/razzlejs.png';
import logoReactServerjs from './assets/images/frameworks/reactserverjs.svg';
import logoElectrodejs from './assets/images/frameworks/electrode.png';

const centerStyle = css({
  textAlign: 'center',
});

const titlePadding = css({
  paddingLeft: '2rem',
  paddingRight: '2rem',
  textAlign: 'center',
});

const Wrapper = g.div({
  position: 'relative',
  margin: '0 auto',
  top: '50%',
  transform: 'translateY(-50%)',
  textAlign: 'center',
});

const ContentWrapper = g.div({
  fontSize: 24,
  lineHeight: 2.4,
  display: 'inline-block',
  textAlign: 'left',
  '& code': {
    padding: '2px 5px',
    borderRadius: 4,
    background: '#dfdfe6',
    color: 'garydark',
  }
});

const TitleHeader = g.h3({
  textAlign: 'left',
  margin: 0,
});

class App extends Component {

  constructor(props) {
    super(props);

  }

  state = {
    fullPageOptions: null,
    tableOfContents: [
      '📜 Brief History of Web Apps',
      '🚨 SPA Issues',
      '🎉 SPA + SSR = Universal App',
      {
        name: '✅ React SSR Demo:',
        children: [
          'Code-Splitting with React-Loadable',
          'Make it Work for SSR',
          'Use React-16 Streaming API',
        ]
      },
      '🦄 What\'s Next?',
    ]
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

    fullPageOptions.slides = [
      this.getTitle(),
      this.getTableOfContents(),
      this.historyOfWebApps(),
      this.spaIssues(),
      this.universalApp(),
      this.ssrDemo(),
      this.whatsNext(),
      this.thankYou(),
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
        <ContentWrapper>
          <g.Ul>
            {
              this.state.tableOfContents.map((t, index) => {
                const isString = this.isString(t);
                return (
                  <g.Li key={index}>
                    {isString ? t : t.name}
                    {
                      !isString && t.children && (
                        <g.Ul fontSize={16}>
                          {
                            t.children.map(ch => {
                              return <g.Li key={ch}>{ch}</g.Li>
                            })
                          }
                        </g.Ul>
                      )
                    }
                  </g.Li>
                );
              })
            }
          </g.Ul>
        </ContentWrapper>
      </Wrapper>
    );
    return this.genSlide(ele);
  }

  thankYou() {
    const ele = (
      <Wrapper>
        <ContentWrapper>
          <h1>🙌 Thank You 🙌</h1>
        </ContentWrapper>
      </Wrapper>
    );
    return this.genSlide(ele);
  }

  whatsNext() {
    const title = this.state.tableOfContents[4];
    const horizontalSliderProps = {
      name: 'horizontalWhatsNextSlider', // name is required
      infinite: true, // enable infinite scrolling
      slides: [],
    };

    const nexts = [
      '✡️ SSR Frameworks',
      '🚰 SSR Streaming API',
      '💄 Styles(link or css-in-js)',
      '⛑ React-Helmet(async)',
      '📸 Pre Render & Cache',
    ];

    const frameworks = [
      {
        img: logoNextjs,
        url: 'https://github.com/zeit/next.js/',
      },
      {
        img: logoRazzlejs,
        url: 'https://github.com/jaredpalmer/razzle',
      },
      {
        img: logoReactServerjs,
        url: 'https://github.com/redfin/react-server',
      },
      {
        img: logoElectrodejs,
        url: 'https://github.com/electrode-io/electrode',
      },

    ];

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>{title}</TitleHeader>
          <g.Ul>
            {nexts.map(next => <g.Li key={next}>{next}</g.Li>)}
          </g.Ul>
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>{nexts[0]}</TitleHeader>
          <g.Ul listStyle="none">
            {
              frameworks.map(f => {
                return (
                  <g.Li key={f.url} textAlign="center">
                    <g.Img height={60} src={f.img}/>
                    <g.Div fontSize={14}>
                      (<a target="_blank" href={f.url}>{f.url}</a>)
                    </g.Div>
                  </g.Li>
                )
              })
            }
          </g.Ul>
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>{nexts[1]}</TitleHeader>
          {this.simpleImage(codeStreamingApi)}
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>{nexts[2]}</TitleHeader>
          <g.Ul>
            <g.Li>
              style link from <code>manifest.json</code>
              <g.Div textAlign="center">
                <g.Img src={codeManifest} height={200}/>
              </g.Div>
            </g.Li>
            <g.Li>
              CSS-in-JS
              <g.Ul fontSize={18} lineHeight={1.5}>
                <g.Li>CSS Modules</g.Li>
                <g.Li>glamor & glamorous</g.Li>
                <g.Li>styled-components</g.Li>
                <g.Li>styled-jsx</g.Li>
                <g.Li>JSS</g.Li>
              </g.Ul>
            </g.Li>
          </g.Ul>
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>{nexts[3]}</TitleHeader>
          <g.Div textAlign="center"
                 display="flex"
                 justifyContent="space-around"
                 alignItems="center"
          >
            {this.simpleImage(codeReactHelmet, true, 'react-helmet')}
            {this.simpleImage(codeReactHelmetAsync, true, 'react-helmet-async')}
          </g.Div>
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>{nexts[4]}</TitleHeader>
          <g.Ul>
            <g.Li>
              Pre Render/Build
              <g.Ul>
                <g.Li>react-snap(with <code>puppeteer</code>),
                  <div>use async components with <code>loadable-components</code></div>
                </g.Li>
                <g.Li>react-snapshot</g.Li>
                <g.Li><code>Gatsby.js</code> like SSG</g.Li>
              </g.Ul>
            </g.Li>
            <g.Li>
              Cache Rendered HTML
            </g.Li>
          </g.Ul>
        </ContentWrapper>
      </Wrapper>
    )));

    return <HorizontalSlider {...horizontalSliderProps}></HorizontalSlider>;
  }

  ssrDemo() {
    const ssrTitle = this.state.tableOfContents[3];
    const horizontalSliderProps = {
      name: 'horizontalSSRDemoSlider', // name is required
      infinite: true, // enable infinite scrolling
      slides: [],
    };
    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>{ssrTitle.name}</TitleHeader>
          <code>yarn add</code> or <code>npm install</code> :
          <g.Ul>
            <g.Li><code>koa, koa-router</code></g.Li>
            <g.Li><code>react-router-dom</code></g.Li>
            <g.Li><code>react-loadable</code></g.Li>
            <g.Li>
              <g.Span marginRight={10}>others:</g.Span>
              <code>react</code>,
              <code>react-dom</code>,
              <code>request or isomorphic-fetch</code>
            </g.Li>
          </g.Ul>
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>Simple SPA</TitleHeader>
          <g.Div textAlign="center">
            <g.Img display="inline-block"
                   height={500}
                   objectFit="contain"
                   src={appRoutes}
                   alt="spa-init"/>
          </g.Div>
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>Code Splitting with react-loadable</TitleHeader>
          {this.simpleImage(spaLoadable)}
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>SSR with react-loadable</TitleHeader>
          <g.Ul>
            <g.Li>Init Koa app</g.Li>
            <g.Li><code>ssr.js</code> for node</g.Li>
            <g.Li>Extract <code>&lt;Route/&gt;</code>s</g.Li>
            <g.Li><code>webpack.ssr.js</code> & <code>.babelrc</code> for <code>ssr.js</code></g.Li>
            <g.Li>Use <code>ssr.js</code> in koa route</g.Li>
            <g.Li>APIs & Initial State</g.Li>
          </g.Ul>
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>Init Koa app</TitleHeader>
          {this.simpleImage(codeKoaInit)}
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}><code>ssr.js</code> for node</TitleHeader>
          {this.simpleImage(codeSSRJS)}
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>Extract <code>&lt;Route/&gt;</code>s</TitleHeader>
          {this.simpleImage(appRoutes)}
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>
            <code>webpack.ssr.js</code> & <code>.babelrc</code> for <code>ssr.js</code>
          </TitleHeader>
          <g.Div textAlign="center"
                 display="flex"
                 justifyContent="space-center"
                 alignItems="center"
          >
            {this.simpleImage(codeWebpackDevLoadable, true)}
            {this.simpleImage(codeWebpackSSR, true)}
            {this.simpleImage(codeBabelrc, true)}
          </g.Div>

        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>
            Use <code>ssr.js</code> in koa route
          </TitleHeader>
          {this.simpleImage(codeAppWithSSR)}
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>
            APIs & Initial State
          </TitleHeader>
          <g.Div textAlign="center"
                 display="flex"
                 justifyContent="space-center"
                 alignItems="center"
          >
            {this.simpleImage(codeInitState, true)}
            {this.simpleImage(codeGetInitState, true)}
          </g.Div>
        </ContentWrapper>
      </Wrapper>
    )));

    return <HorizontalSlider {...horizontalSliderProps}></HorizontalSlider>;
  }

  simpleImage(src, fullWidth, title) {
    return (
      <g.Div textAlign="center">
        {title && <g.H6 textAlign="center" marginBottom={0}>{title}</g.H6>}
        <g.Img display="inline-block"
               height={500}
               objectFit="contain"
               src={src}
               width={fullWidth ? '98%' : ''}
               alt="spa-init"/>
      </g.Div>
    )
  }

  universalApp() {
    const title = this.state.tableOfContents[2];
    const horizontalSliderProps = {
      name: 'horizontalSSRSlider', // name is required
      infinite: true, // enable infinite scrolling
      slides: [],
    };
    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>{title}</TitleHeader>
          <g.H5 className={centerStyle} margin={0}>
            <i>Universal App = Isomorphic App</i>
          </g.H5>
          <g.Div textAlign="center">
            <g.Img display="inline-block"
                   height={400}
                   objectFit="contain"
                   src={ssrCompare}
                   alt="index-html"/>
          </g.Div>
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>How SSR works</TitleHeader>
          <g.Div textAlign="center">
            <g.Img display="inline-block"
                   height={500}
                   objectFit="contain"
                   src={ssrDiagram}
                   alt="index-html"/>
          </g.Div>
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>⚠️ Before use SSR ⚠️</TitleHeader>
          <g.Ul>
            <g.Li>Node Server Side support</g.Li>
            <g.Li>Two Routers (react-router-config)</g.Li>
            <g.Li>APIs (isomorphic-fetch)</g.Li>
            <g.Li>
              🚫 Don't use SSR if...
              <g.Ul fontSize="0.8em">
                <g.Li>Make it SPA before ✨SSR</g.Li>
                <g.Li>SSR can 🐢 performance</g.Li>
                <g.Li>Low 🖥 Resource Spec</g.Li>
              </g.Ul>
            </g.Li>
          </g.Ul>
        </ContentWrapper>
      </Wrapper>
    )));

    return <HorizontalSlider {...horizontalSliderProps}></HorizontalSlider>;
  }

  spaIssues() {
    const title = this.state.tableOfContents[1];
    const horizontalSliderProps = {
      name: 'horizontalSPAIssuesSlider', // name is required
      infinite: true, // enable infinite scrolling
      slides: [],
    };
    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader>{title}</TitleHeader>
          <g.Ul>
            <g.Li>SEO</g.Li>
            <g.Li>AboveTheFold(FirstMeaningfulPaint 首屏性能)</g.Li>
          </g.Ul>
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>SEO</TitleHeader>
          <g.Div textAlign="center">
            <g.Img display="inline-block"
                   height={400}
                   objectFit="contain"
                   src={indexHtml}
                   alt="index-html"/>
          </g.Div>
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader className={centerStyle}>AboveTheFold(FirstMeaningfulPaint 首屏性能)</TitleHeader>
          <g.Div textAlign="center">
            <g.Img display="inline-block"
                   height={500}
                   objectFit="contain"
                   src={csrDiagram}
                   alt="index-html"/>
          </g.Div>
        </ContentWrapper>
      </Wrapper>
    )));

    return <HorizontalSlider {...horizontalSliderProps}></HorizontalSlider>;
  }

  historyOfWebApps() {
    const title = this.state.tableOfContents[0];
    const horizontalSliderProps = {
      name: 'horizontalHistorySlider', // name is required
      infinite: true, // enable infinite scrolling
      slides: [],
    };
    /**
     * <g.Li>Before 2004: Static HTML & Simple Dynamic HTML(XMLHttpRequest)</g.Li>
     <g.Li>2004: First SPA -> GMail</g.Li>
     <g.Li>2006: jQuery</g.Li>
     <g.Li>2009-2013: Backbone & AngularJS</g.Li>
     <g.Li>2013-present: React, Vue, Angular2+...</g.Li>
     */
    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader>{title}</TitleHeader>
          <g.H5 margin="0">Before 2004:</g.H5>
          <g.Ul marginTop={10}>
            <g.Li>Static HTML</g.Li>
            <g.Li>Simple Dynamic HTML</g.Li>
            <g.Li>XMLHttpRequest(from Outlook)</g.Li>
          </g.Ul>
        </ContentWrapper>
      </Wrapper>
    )));
    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader>{title}</TitleHeader>
          <g.H5 margin="0">2004: First SPA -> GMail</g.H5>
          <g.Div textAlign="center">
            <g.Img display="inline-block"
                   height={300}
                   objectFit="contain"
                   src={gmailLogo}
                   alt="gmail"/>
          </g.Div>
        </ContentWrapper>
      </Wrapper>
    )));
    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper>
          <TitleHeader>{title}</TitleHeader>
          <g.H5 margin="0">2006: jQuery</g.H5>
          <g.Div textAlign="center">
            <g.Img display="inline-block"
                   height={300}
                   objectFit="contain"
                   src={jqLogo}
                   alt="jquery"/>
          </g.Div>
        </ContentWrapper>
      </Wrapper>
    )));
    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper className={centerStyle}>
          <TitleHeader className={titlePadding}>{title}</TitleHeader>
          <g.H5 margin="0">2009-2013: Backbone & AngularJS with Node.js</g.H5>
          <g.Div display="inline-block"
                 maxWidth="90%"
                 margin="0 auto"
          >
            <g.Div textAlign="center"
                   display="flex"
                   justifyContent="space-around"
                   alignItems="center"
            >
              <g.Img display="inline-block"
                     width="40%"
                     objectFit="contain"
                     src={dev2010}
                     alt="dev-frameworks"/>
              <g.Img display="inline-block"
                     width="40%"
                     objectFit="contain"
                     src={dev2010tools2}
                     alt="dev-tools"/>
            </g.Div>
          </g.Div>
        </ContentWrapper>
      </Wrapper>
    )));

    horizontalSliderProps.slides.push(this.genSlide((
      <Wrapper>
        <ContentWrapper className={centerStyle}>
          <TitleHeader className={titlePadding}>{title}</TitleHeader>
          <g.H5 margin="0">📦2013-present: React, Vue, Angular2+, 各种全家桶📦</g.H5>
          <g.Div display="inline-block"
                 maxWidth="90%"
                 margin="0 auto"
          >
            <g.Div textAlign="center"
                   display="flex"
                   justifyContent="space-around"
                   alignItems="center"
            >
              <g.Img display="inline-block"
                     width="40%"
                     objectFit="contain"
                     src={dev2018tools}
                     alt="dev-frameworks"/>
              <g.Img display="inline-block"
                     width="40%"
                     objectFit="contain"
                     src={dev2018tools2}
                     alt="dev-tools"/>
            </g.Div>
          </g.Div>
        </ContentWrapper>
      </Wrapper>
    )));

    return <HorizontalSlider {...horizontalSliderProps}></HorizontalSlider>;
  }

  genSlide(slide) {
    return (
      <Slide>
        {slide}
      </Slide>
    );
  }

  isString(input) {
    return typeof input === 'string';
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
