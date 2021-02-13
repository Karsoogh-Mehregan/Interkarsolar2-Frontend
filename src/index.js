import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer } from 'react-toastify';

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
      account: {
        user: state.account.user,
        token: state.account.token,
      },
      Intl: state.Intl,
    })
  );
});

const Toast = () => (
  <ToastContainer
    rtl
    position="bottom-right"
    autoClose={4000}
    transition={Slide}
    newestOnTop
    hideProgressBar={false}
    pauseOnHover={false}
    pauseOnFocusLoss={false}
    closeOnClick
    limit={3}
    draggable={false}
  />
);


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Toast />
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
