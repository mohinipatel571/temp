import { useEffect, useState } from "react";

const HelloFunction = (props) => {
  const [num, setNum] = useState(props.num);

  const increment = () => {
    setNum(num + 1);
                  
  };
  const a=()=>
  {
     console.log("In a ComponenDidMount...")
  }
  const b=()=>
{
  console.log("In am ComponentDiDUpdate..")

}
  useEffect(a,[])

  useEffect(b,[num])
  return (
    <>
      <div className="border shadow text-center p-5 m-5">
        <h2>Function Component</h2>
        <h1>Num:{num}</h1>
        <button className="btn btn-success" onClick={increment}>Click Me</button>
      </div>
    </>
  );
};
export default HelloFunction;
