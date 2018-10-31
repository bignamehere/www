
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'mineral-ui/themes';
import StartEnd from 'mineral-ui/StartEnd';
import { breakpoint_narrow, breakpoint_medium } from 'mineral-ui-tokens';
import Text from 'mineral-ui/Text';
import Button from 'mineral-ui/Button';
import Card, { CardActions, CardBlock, CardImage, CardTitle } from 'mineral-ui/Card';

const featuredProjectThumb = "https://cdn.buttercms.com/XLssMXomReKpmq455cBp";
const featuredProjectLink = "/projects";
const featuredInsightsThumb = "https://cdn.buttercms.com/nHzfKRoOSmU5ED3PPrcv";
const featuredInsightsLink = "/insights/smart-defaults";

class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <footer>
        <div className={"footer"}>
          <div className={"footer__bd"}>
            <div className={"footer__primary grid__1/1 grid__10/12@l"}>
              <div className={"grid__1/1 grid__2/12@l"}>
                <h3 class="footer__cat-header">Site Links</h3>
                <ul class="footer__list">
                  <li><Link primary to='/'>Home</Link></li>
                  <li><Link primary to='/insights'>Insights</Link></li>
                  <li><Link primary to='/projects'>Projects</Link></li>
                </ul>
              </div>
              <div className={"grid__1/1 grid__5/12@l"}>
                <h3 class="footer__cat-header">Recommended Insights</h3>  
                <a href={featuredInsightsLink}>
                <Card>
                  <CardTitle>Smart Defaults</CardTitle>  
                  <CardImage src={featuredInsightsThumb} alt="featured insights article" />
                  <CardBlock>This imformation is really smart.</CardBlock>
                </Card>
                </a>
              </div>
              <div className={"grid__1/1 grid__5/12@l"}>
                <h3 class="footer__cat-header">Featured Project</h3> 
                <a href={featuredProjectLink}> 
                <Card>
                  <CardTitle>FSA Design System</CardTitle>
                  <CardImage src={featuredProjectThumb} alt="featured project" />
                  <CardBlock>This project was really cool.</CardBlock>
                </Card>
                </a>
              </div>
            </div>
            <div className={"footer__secondary grid__1/1 grid__2/12@l"}> 
              <a href="https://buttercms.com/" target="_blank"><img width="100%" src={this.props.logoSrc} /></a>
            </div>
          </div>
        </div>
      </footer>	
    );
  }
}

export default Footer;