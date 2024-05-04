import ReactDOM from 'react-dom/client';
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { withRouter } from 'react-router-dom';

import { history } from 'utils';

import { Provider } from 'react-redux';
import { store } from 'store/store';
import './index.scss';
import AppManagement from 'pages/AppManagement';

import reportWebVitals from './reportWebVitals';

class ScrollToTop extends React.Component<any> {
  public componentDidUpdate(prevProps: any) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  public render() {
    const { children, location } = this.props;
    return React.cloneElement(children as any, {
      location
    });
  }
}

const ScrollToTopHandler = withRouter(ScrollToTop);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ScrollToTopHandler>
        <AppManagement />
      </ScrollToTopHandler>
    </ConnectedRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
