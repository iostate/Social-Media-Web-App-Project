import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route } from 'react-router-dom';


import reducers from './reducers';
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      { 
        // What does this do? 
        // It's the base URL. Whenever a user fucks up, bring them here. It renders all posts.  
        <Route path="/" component={PostsIndex} />

        // What does this do? 
        // It's a URL for a specific post. It renders a specific post based on an ID
        // <Route path="/posts/:id" component={PostsShow} />

        // What does this do?
        // It's the New Post URL. It renders a form that allows user to create a new post
        // <Rotue path="/posts/new" component={PostsNew} />
      }
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
