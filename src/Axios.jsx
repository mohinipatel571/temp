import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';

import { assertImportSpecifier } from '@babel/types';
const  Userapi=()=>
{
    const user_api="https://reqres.in/api/users/2";
   const [user, setUser] = useState([]);
    const Getappi=()=>{
    axios.get(user_api).then((response)=>{
       setUser(response.data.data);

    }).catch((error)=>
    {
        console.error(error);

    })
}
    useEffect(() => {
      Getappi()
    }, [])

    return(
    <>
        {console.log(user)}
        <div className="text-center">{JSON.stringify(user)}</div> //
   
    </>);
      }
      export default Userapi;