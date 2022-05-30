import React, {useState} from "react";

const App = () => {
    const state = useState();
    //console.log(state);

    const [count, setCount] = useState(0);   //5 is initial value, count is current value and setCount is updated value

    const IncNum = () => {
        setCount(count + 1);
        //console.log("clicked " + count++);
}

return (
    <>
      <h1> {count} </h1>
      <button onClick={IncNum}> Click Me </button>
    </>
  );
}

export default App;