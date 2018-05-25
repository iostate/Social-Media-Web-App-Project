import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() { return <div>Hello!</div>}
}

class World extends React.Component {
  render() { return <div>World!</div>}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      Header
      { 
        // What does this do? 
        // It's the base URL. It renders all posts 
        // <Route path="/" component={PostsIndex} />

        // What does this do? 
        // It's a URL for a specific post. It renders a specific post based on an ID
        // <Route path="/posts/:id" component={PostsShow} />

        // What does this do?
        // It's the New Post URL. It renders a form that allows user to create a new post
        // <Rotue path="/posts/new" component={PostsNew} />
      }
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={World} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
