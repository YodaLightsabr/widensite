import '../styles/globals.css'
import Head from 'next/head'
import { useState, useEffect } from 'react'

class BreakpointChain {
  constructor (width) {
    this.styleData = {};
    this.width = width;
    this.smBreakpoint = {}, this.mdBreakpoint = {}, this.lgBreakpoint = {}, this.xlBreakpoint = {}, this.xxlBreakpoint = {}, this.initialBreakpoint = {};
  }
  sm (styles) {
    this.smBreakpoint = styles;
    return this;
  }
  md (styles) {
    this.mdBreakpoint = styles;
    return this;
  }
  lg (styles) {
    this.lgBreakpoint = styles;
    return this;
  }
  xl (styles) {
    this.xlBreakpoint = styles;
    return this;
  }
  xxl (styles) {
    this.xxlBreakpoint = styles;
    return this;
  }
  initial (styles) {
    this.initialBreakpoint = styles;
    return this;
  }
  compute () {
    const { width } = this;
    const styleData = this.initialBreakpoint;
    if (width >= BreakpointChain.breakpoints.sm) {
      for (const style in this.smBreakpoint) {
        styleData[style] = this.smBreakpoint[style];
      }
    }
    if (width >= BreakpointChain.breakpoints.md) {
      for (const style in this.mdBreakpoint) {
        styleData[style] = this.mdBreakpoint[style];
      }
    }
    if (width >= BreakpointChain.breakpoints.lg) {
      for (const style in this.lgBreakpoint) {
        styleData[style] = this.lgBreakpoint[style];
      }
    }
    if (width >= BreakpointChain.breakpoints.xl) {
      for (const style in this.xlBreakpoint) {
        styleData[style] = this.xlBreakpoint[style];
      }
    }
    if (width >= BreakpointChain.breakpoints['2xl']) {
      for (const style in this.xxlBreakpoint) {
        styleData[style] = this.xxlBreakpoint[style];
      }
    }
    this.styleData = styleData;
    console.log(styleData)
    return styleData;
  }
  get styles () {
    return this.compute();
  }
  
  static get breakpoints () {
    return breakpoints;
  }
}

const breakpoints = {
  sm:	640,
  md:	768,
  lg:	1024,
  xl:	1280,
  '2xl': 1536
}

const findBreakpoint = (width) => {
  let breakpoint = 'sm';
  Object.keys(breakpoints).forEach(key => {
    if (width >= breakpoints[key]) {
      breakpoint = key;
    }
  });
  return breakpoint;
}

function MyApp({ Component, pageProps }) {
  const [viewport, setViewport] = useState({
    styler: new BreakpointChain(0),
    breakpoint: findBreakpoint(0),
    width: 0,
    height: 0
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
        breakpoint: findBreakpoint(window.innerWidth),
        styler: new BreakpointChain(window.innerWidth)
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/norse-font/font.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />

      </Head>
      <Component {...pageProps} viewport={viewport} />
    </>
  );
}

export default MyApp
