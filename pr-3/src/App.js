import Card from "../src/components/card"
import React, { useState } from 'react';

function App() {
  let [count,setCount] = useState(0)
  let myobj = {
   name:"himanshi",
   age:19
  }

  return (
    <div className="flex items-center justify-center flex-col p-10">
      <h1>Hello</h1>
      <Card user="Himanshi" tex="Prince" />
      <br />
      <Card user="Prince" />
    </div>
  );
}

export default App;
