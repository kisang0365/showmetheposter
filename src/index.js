import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import cookie from 'react-cookie';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);


let rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, rootElement);
