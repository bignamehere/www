
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./nav.scss";

class Nav extends Component {

  render() {
    return (
    <nav>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/insights">Insights</Link></li>
				<li><Link to="/projects">Projects</Link></li>
			</ul>
		</nav>
    );
  }
}

export default Nav;