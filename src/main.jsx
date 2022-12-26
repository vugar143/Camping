import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"
import {legacy_createStore} from "redux"
import Reducer from "./store/Reducer"
const store=legacy_createStore(Reducer)
import "swiper/css/bundle";
import "./styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
    <App />
    </Provider>
    </Router>
)
