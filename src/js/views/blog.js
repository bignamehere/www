import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Butter from 'buttercms'

const butter = Butter('83c7a2fe135038b0520ed5ec9df758e57b76f681');

class Blog extends Component {

	constructor(props) {
    super(props);

    this.state = {
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
    //let page = this.props.params.page || 1;
    //this.fetchPosts(page);
    this.fetchPosts(1);
	}
	
	componentWillReceiveProps(nextProps) {
    this.setState({loaded: false});

    let page = nextProps.params.page || 1;

    this.fetchPosts(page)
  }

  render() {
    if (this.state.loaded) {
      const { next_page, previous_page } = this.state.resp.meta;

      return (
        <div>
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