import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import {BrowserRouter, Route } from 'react-router-dom';


import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      
        <Route path="/" component={PostsIndex} />
        <Route path="/posts/new" component={PostsNew} />           
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
