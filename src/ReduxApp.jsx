import React from 'react'

import {increment,decrement,reset } from './Action.jsx';
import { useSelector,useDispatch} from "react-redux";
 import "./App.css";
const ReduxApp=()=>
{
     const changeThenumber=useSelector((state)=>state.changeThenumber);
     const dispatch=useDispatch();
   
return(
    <>
    
    <div className="text-center " >
    <h3>Counter</h3>
      <h3>{changeThenumber}</h3>
      <button  onClick={() => dispatch(increment())}  className="btn btn-danger">Increase</button>
      <button onClick={() => dispatch(reset())} className="btn btn-secondary">Reset</button>
      <button onClick={() => dispatch(decrement())} className="btn btn-info">Decrease</button>
      </div>
    </>
);

}
export default ReduxApp;