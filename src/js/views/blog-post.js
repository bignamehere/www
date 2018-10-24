import React, { Component } from 'react';
import Butter from 'buttercms';
import { Helmet } from "react-helmet";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import Header from '../components/Header/header';

const butter = Butter('83c7a2fe135038b0520ed5ec9df758e57b76f681');

class BlogPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentWillMount() {
    let slug = this.props.match.params.slug;

    console.log(this.props.match);

    butter.post.retrieve(slug).then((resp) => {
      this.setState({
        loaded: true,
        post: resp.data.data
      })
    });
  }

  render() {
    if (this.state.loaded) {
      const post = this.state.post;

      return (
        <div>
          <Helmet>
            <title>{post.seo_title}</title>
            <meta name="description" content={post.meta_description} />
            <meta name="og:image" content={post.featured_image} />
          </Helmet>
          <div className={"container"}>
            

            <Header />
            <h1>{post.title}</h1>
            <div>{ ReactHtmlParser(post.body) }</div>
            <div>{post.body}</div>
            
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

export default BlogPost;