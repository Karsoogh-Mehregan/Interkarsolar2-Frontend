import './theme/styles/style.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer } from 'react-toastify';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { initRedirect } from './redux/actions/redirect';
import Root from './root/Root';
import RTLMuiTheme from './theme/RTLMuiTheme';
import jss from './utils/jssRTL';

const App = ({ redirectTo, forceRedirect, initRedirect }) => {

  const history = useHistory();
  useEffect(() => {
    if (redirectTo !== null) {
      history.push(redirectTo);
      if (forceRedirect) {
        history.push(redirectTo);
        history.push('/loading/');
        history.goBack();
      } else {
        history.push(redirectTo);
      }
      initRedirect();
    }
  }, [redirectTo, forceRedirect, initRedirect, history]);

  const Toast = () => (
    <ToastContainer
      rtl
      position="top-right"
      autoClose={4000}
      transition={Slide}
      hideProgressBar={false}
      pauseOnHover={false}
      pauseOnFocusLoss={false}
      closeOnClick
      limit={3}
    />
  );

  return (
    <ThemeProvider theme={RTLMuiTheme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <Root />
        <Toast />
      </StylesProvider>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  redirectTo: state.redirect.redirectTo,
  forceRedirect: state.redirect.force,
});

export default connect(mapStateToProps, { initRedirect })(App);
