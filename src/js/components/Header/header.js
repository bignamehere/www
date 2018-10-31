
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'mineral-ui/themes';
import StartEnd from 'mineral-ui/StartEnd';
import { breakpoint_narrow, breakpoint_medium } from 'mineral-ui-tokens';
import Text from 'mineral-ui/Text';

import Nav from  '../Nav/nav';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      brandingText: "bignamehere"
    };
  }

  render() {
    return (
      <StartEnd
        breakpoints={[breakpoint_narrow,breakpoint_medium]}
        direction={['column','row','row']}>
        
        <h1 className="logo">{this.state.brandingText}</h1>
        
        <ThemeProvider theme={{color_themePrimary: 'darkgray'}}>
          <Nav />
        </ThemeProvider>
      </StartEnd>		
    );
  }
}

export default Header;