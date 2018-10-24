
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Flex, {FlexItem} from 'mineral-ui/Flex';
import Button from 'mineral-ui/Button';
import "./nav.scss";

class Nav extends Component {

  render() {
    return (
		<nav>
		
			<Flex wrap>
				<FlexItem>
					<Link primary to="/">
						<Button minimal>HOME</Button>
					</Link>
				</FlexItem>
				<FlexItem>
					<Link primary to="/insights">
						<Button minimal>INSIGHTS</Button>
					</Link>
				</FlexItem>
				<FlexItem>
					<Link primary to="/projects">
						<Button minimal>PROJECTS</Button>
					</Link>
				</FlexItem>
			</Flex>

		</nav>
    );
  }
}

export default Nav;