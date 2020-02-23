import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import classes from './App.module.css';
import reducers from './reducers/'
import CountersList from './components/countersList'
import AddCounter from './components/addCounter'
import Options from './components/options'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

function App() {
  return (
    <Provider store={store}>
      <div className={classes.AppWrapper}>
        <div className={classes.ContentWrapper}>

          <div className={classes.HeaderWrapper}>
            <h1 className={classes.Titulo}>Contadores</h1>
            <AddCounter/>
          </div>

          <div className={classes.MainWrapper}>
            <div className={classes.SideBar}>
              <Options/>
              <CountersList/>
            </div>
          </div>

        </div>
      </div>

      
    </Provider>
  );
}

export default App;
