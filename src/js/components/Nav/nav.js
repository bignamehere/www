
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Flex, {FlexItem} from 'mineral-ui/Flex';
import Button from 'mineral-ui/Button';
import { css } from 'react-emotion';


class Nav extends Component {

  render() {
    return (
		<nav>
			<div className={"nav"}>
				<Flex wrap>
					<FlexItem>
						<Link primary to="/">
							<Button minimal className={"nav__button"}>Home</Button>
						</Link>
					</FlexItem>
					<FlexItem>
						<Link primary to="/insights">
							<Button minimal className={"nav__button"}>Insights</Button>
						</Link>
					</FlexItem>
					<FlexItem>
						<Link primary to="/projects">
							<Button minimal className={"nav__button"}>Projects</Button>
						</Link>
					</FlexItem>
				</Flex>
			</div>
		</nav>
    );
  }
}

export default Nav;