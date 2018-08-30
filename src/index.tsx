import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { authenticate } from './reducers/index';
import { StoreState } from './types/index';
import { LoginAction } from './actions';
import { Provider } from 'react-redux';

const store = createStore<StoreState, LoginAction, any, any>(authenticate, {
  authenticated: false
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
