import React, { Component } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts";
import { Route, NavLink } from "react-router-dom";
import NewPost from "./NewPost/NewPost";
import FullPost from "../../components/Post/Post";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "purple",
                    fontWeight: "bold",
                    textDecoration: " text-decoration: underline"
                  }}
                >
                  Home
                </NavLink>
                <NavLink to="/new-post" exact>
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/*<Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home 2</h1>} />*/}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
        <Route path="/:id" component={FullPost} />
      </div>
    );
  }
}

export default Blog;
