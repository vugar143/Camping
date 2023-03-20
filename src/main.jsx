import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"
import {legacy_createStore,applyMiddleware} from "redux"
import thunk from 'redux-thunk';
import Reducer from "./store/Reducer"
const store=legacy_createStore(Reducer,applyMiddleware(thunk))
import "swiper/css/bundle";
import "./styles.css";
import './sass/scss.scss'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>

    <Provider store={store}>
    <App />
    </Provider>
   
    </Router>
)
