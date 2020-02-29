import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import classes from './App.module.css';
import reducers from './reducers/'
import thunk from 'redux-thunk'
import Main from './Main'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

function App() {
  return (
    <Provider store={store}>
      <div className={classes.AppWrapper}>
        <Main/>
      </div>      
    </Provider>
  );
}

export default App

