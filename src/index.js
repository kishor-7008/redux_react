import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import MainContainer from './containers/MainContainer';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () =>
  <div>
    <h1 style={styles}>Super Sick Counter React Redux App</h1>
    <MainContainer />
  </div>;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
