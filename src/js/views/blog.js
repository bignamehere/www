import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';

import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';

const butter = Butter('83c7a2fe135038b0520ed5ec9df758e57b76f681');
const butterLogo = "https://cdn.buttercms.com/resize=width:400/tV063DQ4TlGdZuAxuvXw";

class Blog extends Component {

	constructor(props) {
    super(props);

    this.state = {
      content: null,
      loaded: false
    };
  }

  fetchPosts(page) {
    butter.post.list({page: page, page_size: 10}).then((resp) => {
        this.setState({
					loaded: true,
					resp: resp.data
        })
    });
  }

  componentWillMount() {
    butter.page.retrieve('*', 'insights').then((resp) => {
      this.setState({
        content: resp.data.data
      })
    });


    let page = this.props.match.params.page || 1;

    this.fetchPosts(page);
	}
	
	componentWillReceiveProps(nextProps) {
    this.setState({loaded: false});

    let page = nextProps.match.params.page || 1;

    this.fetchPosts(page);
  }

  render() {
    if (this.state.loaded) {
      const { next_page, previous_page } = this.state.resp.meta;

      const fields = this.state.content.fields;

      return (
        <div className={"container"}>
          <Header />

          <h1>{fields.header}</h1>
          <h3>{fields.lead}</h3>
          {this.state.resp.data.map((post) => {
            return (
              <div key={post.slug}>
                <Link to={`/insights/${post.slug}`}>{post.title}</Link>
              </div>
            )
          })}

          <img width="100%" src={fields.hero_image} />

          <div>
            {previous_page && <Link to={`/insights/${previous_page}`}>Prev</Link>}

            {next_page && <Link to={`/insights/${next_page}`}>Next</Link>}
          </div>

          <Footer logoSrc={butterLogo} />

        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

export default Blog;