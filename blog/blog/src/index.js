import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from 'redux';
import './index.css';
import App from './components/App';
import reducers from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {configureStore(reducers)}>
    <App />
  </Provider>
);

