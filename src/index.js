import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import store from "./Store";
import {Provider} from "react-redux"
store.subscribe(()=>console.log(store.getState()))



ReactDOM.render(
 <React.StrictMode>
   {/* <BrowserRouter >
     <App/>
   </BrowserRouter> */}
   <Provider store={store}>
   <App/>
   </Provider>
 </React.StrictMode>
 ,
  document.getElementById('root')
);
 