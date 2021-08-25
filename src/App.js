import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import Temp from "./Temp";
import HeloClass from "./HeloClass";
import HelloFunction from "./HelloFunction";
import UseForm from "./UseForm ";
import CurrentTime from "./CurrentTImeChange";
import HelloWithMap from "./HelloWithMap";
import ClickMe from "./ClickMe";
import HelloLogin from "./HelloLogin";
import RegistrationForm from "./Registrationform";
import LoginTask from "./LoginTask";
import About from "./About";
import Contact from "./Contact";
import { Route, Switch } from "react-router-dom";
import Userapi from "./Axios";
import Showtable from "./Showtable";
import Newbar from "./Newbar";
import ReduxApp from "./ReduxApp";


function App() {
//   const friend = ["Mohini ,Chanchal,jasleen,Manisha"];
//   const friendetails=[{name:"mona"  ,salary:"20k"},
//   {name:"raj", salary:"14k"},
//   {name :"rishi" , salary:"12"},

// ];

 const Error=()=>{
   return  <h1>
     This is Incorrect Page
   </h1>
 };
  return (
    <>
      {/* <Login/>  */}
      {/* <SignUp/>  */}
      {/* <Temp/>  */}

      {/* <UseForm/>  */}
      {/* <HeloClass/>
     
     <HelloFunction num = {0}/> */}
      {/* <CurrentTime/> */}
      {/* {friend.map((value, index) => (
        <HelloWithMap name={value} key={index} />

      ))} */}
      {/* {friendetails.map((value,index)=>(
        <HelloWithMap name={value.name}  salary={value.salary} key={index}/>
      ))} */}
     
      {/* <ClickMe/> */}
     {/* <HelloLogin/> */}
        {/* <RegistrationForm/>
       <LoginTask/> */}
       
      
{/*       
         <Switch>
       
       <Route exact path='/home' component={HelloLogin}/>
         <Route path='/about' component={About}/>
        <Route path='/contact'  component={Contact}/>
        <Route component={Error}/>
        
      </Switch>  
   
     {/* <Userapi/>  */}
     {/* <Newbar/> 
     */}
     <ReduxApp/> 
  </>
  );
}

export default App;
