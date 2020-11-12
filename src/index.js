import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

// Redux Start Here
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducer';


import {DataLayer} from './context/DataLayer';

import contextReducer,{initialState} from './context/contextReducer';
// const store = createStore(reducer);
const store = createStore(reducer , applyMiddleware(ReduxThunk));



ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider> */}
    {/* <Provider store = {store}>
    <App />
    </Provider> */}

    <DataLayer initialState={initialState} reducer={contextReducer}>
      <App />
    </DataLayer>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
