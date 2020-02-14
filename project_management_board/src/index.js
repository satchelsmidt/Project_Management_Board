import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import this to create a redux store
import { createStore } from 'redux'
//import root reducer
import rootReducer from './store/reducers/rootReducer'
//import provider component, which surrounds app and passes store into app
import { Provider } from 'react-redux'


//initialize our store variable
//must pass root reducer into this function to associate it with the store
//can have multiple reducers for multiple app function (auth, create project, etc.), and then combine into one reducer that we pass into this store. 
const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
