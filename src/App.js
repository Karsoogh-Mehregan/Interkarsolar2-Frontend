import './theme/styles/style.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer } from 'react-toastify';
import { CssBaseline, LinearProgress } from '@material-ui/core';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { initRedirect } from './redux/actions/redirect';
import Root from './root/Root';
import RTLMuiTheme from './theme/RTLMuiTheme';
import jss from './utils/jssRTL';

const App = ({ redirectTo, forceRedirect, initRedirect, loading }) => {

  const history = useHistory();
  useEffect(() => {
    if (redirectTo !== null) {
      history.push(redirectTo);
      initRedirect();
    }
  }, [redirectTo, forceRedirect, initRedirect, history]);

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

  const Loading = () => {
    if (loading) {
      return (
        <div style={{ width: '100%', position: 'fixed', top: '0px' }}>
          <LinearProgress />
        </div>
      )
    } else {
      return (
        <>
        </>
      )
    }
  }

  return (
    <ThemeProvider theme={RTLMuiTheme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <Loading />
        <Root />
        <Toast />
      </StylesProvider>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  redirectTo: state.redirect.redirectTo,
  forceRedirect: state.redirect.force,
  loading: state.account.isFetching || state.exam.isFetching,
});

export default connect(mapStateToProps, { initRedirect })(App);
