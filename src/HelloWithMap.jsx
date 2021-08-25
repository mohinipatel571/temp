import React from 'react'
import HeloClass from './HeloClass';
const HelloWithMap=(props)=>
{

    return(
        <>
        <div className="container my-5">
            <div className="border p-5  boder rounded text-center text-light bg-primary fw-bold">
                Hello i am {props.name} and my salary is :{props.salary}
            </div>
        </div>
        </>
    );

};
export default HelloWithMap;