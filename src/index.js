import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import { fetchloadlogin } from './store/actions/loginActions';
import setToken from './utilities/setToken';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  if(localStorage.token){
    setToken(localStorage.token)
    store.dispatch(fetchloadlogin())
  }

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
