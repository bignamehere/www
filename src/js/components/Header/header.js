
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import StartEnd from 'mineral-ui/StartEnd';
import Box from 'mineral-ui/Box';
import Text from 'mineral-ui/Text';
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
        breakpoints={[474,600]}
        direction={['column','row','row']}>
        <Box>
          <Text element="h1" fontWeight={300}>{this.state.brandingText}</Text>
        </Box>
        <Box>
          <Nav />
        </Box>
      </StartEnd>
		
    );
  }
}

export default Header;