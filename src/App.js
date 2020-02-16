import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import classes from './App.module.css';
import reducers from './reducers/'
import CountersList from './components/countersList'
import Total from './components/total'
import AddCounter from './components/addCounter'
import Options from './components/options'


const store = createStore(reducers)

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
              <CountersList />
            </div>
          </div>
          
        </div>
      </div>

      
    </Provider>
  );
}

export default App;
