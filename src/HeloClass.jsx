import { Component } from "react";

class HeloClass extends Component
{
    constructor()
    {
        super();
        this.state={
             num: 0,
        };
        console.log("Constructor Called")
    }
    componentDidMount()
    {
        console.log("ComponentDidMount Called")
    }
    componentDidUpdate()
    {
     console.log("ComponentDidUpdate Called")
    }
    
    increment=()=>
    {
       this.setState(
           {num:this.state.num+1,});
    };
    
    render(){
        console.log("Rander Method Called")
        return(
    <>
     <div className="border shadow p-5 m-5 text-center">
        <h4>Class Component</h4>
         <h1>Num:{this.state.num}</h1>
         <button className="btn btn-success" onClick={this.increment}>Click Me</button>
     </div>  
    </>

            )
    }
}
export default HeloClass;