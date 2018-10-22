
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./nav.scss";

class Nav extends Component {

  render() {
    return (
		<nav>
		
			<div className={"nav"}>
				<div className={"nav"}>
					<ul className={"nav__list"} aria-label="Primary Navigation">
						<li className={"nav__list-item"}>
							<Link to="/" className={"nav__link nav__link--active"}>
								<span className={"nav__text"}>Home</span>
							</Link>
						</li>
						<li className={"nav__list-item"}>
							<Link to="/insights" className={"nav__link"}>
								<span className={"nav__text"}>Insights</span>
							</Link>
						</li>
						<li className={"nav__list-item"}>
							<Link to="/projects" className={"nav__link"}>
								<span className={"nav__text"}>Projects</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>

		</nav>
    );
  }
}

export default Nav;