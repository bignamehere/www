
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import StartEnd from 'mineral-ui/StartEnd';
import Flex, {FlexItem} from 'mineral-ui/Flex';
import Box from 'mineral-ui/Box';
import Text from 'mineral-ui/Text';
import IconCode from 'mineral-ui-icons/IconCode';
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
          <Flex direction={['row']}>
            <FlexItem><IconCode size="2.5em" /></FlexItem>
            <FlexItem><Text element="h2" fontWeight={300}>{this.state.brandingText}</Text></FlexItem>
          </Flex>
        </Box>
        <Box>
          <Nav />
        </Box>
      </StartEnd>
		
    );
  }
}

export default Header;