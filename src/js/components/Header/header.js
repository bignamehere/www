
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'mineral-ui/themes';
import StartEnd from 'mineral-ui/StartEnd';
import Text from 'mineral-ui/Text';
import { breakpoint_narrow, breakpoint_medium, teal_60 } from 'mineral-ui-tokens';
import './header.scss';

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
        <Text element="h2" fontWeight={300} color={teal_60}>{this.state.brandingText}</Text>
        <ThemeProvider theme={{color_themePrimary: 'darkgray'}}>
          <Nav />
        </ThemeProvider>
      </StartEnd>		
    );
  }
}

export default Header;