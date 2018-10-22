
import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
    <header>
      <div className={"header-app"}>
        <div className={"header-app__bd"}>
          <div className={"header-app__primary"}>
            <Link className={"header-app__home-link"} to="/">
              <span className={"header-app__app-name"}>
                {this.state.brandingText}
              </span>
            </Link>
          </div>
          <div className={"header-app__secondary"}>
            <Nav />
          </div>
        </div>
      </div>
		</header>
    );
  }
}

export default Header;