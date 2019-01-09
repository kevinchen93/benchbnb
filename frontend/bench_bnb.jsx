import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { fetchBenches } from './actions/bench_actions';

window.fetchBenches = fetchBenches;

document.addEventListener('DOMContentLoaded', () => {
  console.log('page loaded');
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);
});
