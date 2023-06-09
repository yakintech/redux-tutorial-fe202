import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './store/slices/counterSlice'
import todoReducer from './store/slices/todoSlice'
import orderReducer from './store/slices/orderSlice'

import logger from 'redux-logger';

// const store = createStore(rootReducer, applyMiddleware(thunk))


const store = configureStore({
  reducer:{
    counterReducer: counterReducer,
    todoReducer: todoReducer,
    orderReducer: orderReducer
  }
}, applyMiddleware(logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
   

  </React.StrictMode>
);
