import React, { Component } from "react";
import axios from "axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then(res => {
        const posts = res.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Jamie"
          };
        });
        this.setState({
          posts: updatedPosts
        });
        //console.log(res);
      })
      .catch(err => {
        console.log(err);
        //this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = (
      <p style={{ textAlign: "center", color: "red" }}>Something went wrong!</p>
    );
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Link to={"/" + post.id} key={post.id}>
            <Post
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          </Link>
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
