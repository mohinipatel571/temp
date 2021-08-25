import { Count } from "../Action.jsx";

let initiation=0
const changeThenumber =(state=initiation,action)=>{
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};
//   if(action.type === 'Increment') {
//     return {
//        count: state.count + 1
      
//     };
//   }
//   if(action.type === 'Decrement') {
  
//     return {
//        count: state.count - 1
      
//     }
    
//   }
//   return state;
// }
export default changeThenumber;