import './theme/styles/style.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { CssBaseline, LinearProgress } from '@material-ui/core';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { initRedirect } from './redux/actions/redirect';
import { initToast } from './redux/actions/notifications';
import Root from './root/Root';
import RTLMuiTheme from './theme/RTLMuiTheme';
import jss from './utils/jssRTL';

const App = ({ redirectTo, forceRedirect, initRedirect, initToast, loading, notifications }) => {

  const [_, rerender] = useState();

  useEffect(() => {
    if (notifications.success) {
      setTimeout(() => {
        toast.success(notifications.success);
      }, 0)
    } else if (notifications.warning) {
      setTimeout(() => {
        toast.warning(notifications.warning);
      }, 0)
    } else if (notifications.info) {
      setTimeout(() => {
        toast.info(notifications.info);
      }, 0)
    } else if (notifications.error) {
      setTimeout(() => {
        toast.error(notifications.error);
      }, 0)
    }
    rerender(Math.random());
    initToast();
  }, [notifications, initToast])

  const history = useHistory();
  useEffect(() => {
    if (redirectTo !== null) {
      history.push(redirectTo);
      initRedirect();
    }
  }, [redirectTo, initRedirect, history]);

  const Toast = () => (
    <ToastContainer
      rtl
      position="top-left"
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
        <div style={{ width: '100%', position: 'fixed', top: '0px', zIndex: '1000' }}>
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
        <Toast />
        <Root />
      </StylesProvider>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  redirectTo: state.redirect.redirectTo,
  forceRedirect: state.redirect.force,
  loading: state.account.isFetching || state.exam.isFetching,
  notifications: state.notifications,
});

export default connect(mapStateToProps, { initRedirect, initToast })(App);