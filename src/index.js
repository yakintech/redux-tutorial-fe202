import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { CounterReducer } from './store/counterReducer';
import { Provider } from 'react-redux';
import { todoReducer } from './store/todoReducer';
import { favoriteReducer } from './store/favoritesReducer';


const store = createStore(favoriteReducer)


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
