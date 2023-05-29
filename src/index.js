import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import { BrowserRouter } from 'react-router-dom';

// css react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// импортируем store и Provider для того что управлять и передать состояниями 
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

);


