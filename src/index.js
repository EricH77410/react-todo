import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import App from './container/App';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore()

store.subscribe(()=>{
  console.log(store.getState())
})

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
  , document.getElementById('root'));
registerServiceWorker();
