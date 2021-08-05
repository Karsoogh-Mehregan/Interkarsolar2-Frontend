import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast } from 'react-toastify';

import App from './App';
import configureStore from './redux/store/configureStore';

const persistedState = localStorage.getItem('Interkarsoolar2')
  ? JSON.parse(localStorage.getItem('Interkarsoolar2'))
  : {};

const store = configureStore(persistedState);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem(
    'Interkarsoolar2',
    JSON.stringify({
      account: state.account,
    })
  );
});

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App toast={toast} />
    </Provider>
  </Router>,
  document.getElementById('root')
);
