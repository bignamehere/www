import React, { Component } from 'react';
import Butter from 'buttercms'

import Header from '../components/Header/header';

const butter = Butter('83c7a2fe135038b0520ed5ec9df758e57b76f681');

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: null
    };
  }

  componentWillMount() {
    butter.page.retrieve('*', 'home').then((resp) => {
      this.setState({
        content: resp.data.data
      })
    });
  }

  render() {
    if (this.state.content) {
      const fields = this.state.content.fields;
      
      return (
        <div className={"container"}>
          <Header />
          
          <h1>{fields.header}</h1>
          <h3>{fields.lead}</h3>
          <img width="100%" src={fields.hero_image} />
          <div className={"butter-logo"}>
            <img width="100%" src={fields.butter_logo} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

export default Home;