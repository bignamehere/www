import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Butter from 'buttercms';

import Nav from '../components/Nav/nav';

const butter = Butter('83c7a2fe135038b0520ed5ec9df758e57b76f681');

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
          <Nav />

          <h1>{fields.header}</h1>
          <h3>{fields.lead}</h3>
          <img width="100%" src={fields.hero_image} />

          {this.state.resp.data.map((post) => {
            return (
              <div key={post.slug}>
                <Link to={`/insights/${post.slug}`}>{post.title}</Link>
              </div>
            )
          })}

          <br />

          <div>
            {previous_page && <Link to={`/insights/${previous_page}`}>Prev</Link>}

            {next_page && <Link to={`/insights/${next_page}`}>Next</Link>}
          </div>
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