import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex justify-center gap-7 shadow-lg bg-white flex-wrap rounded-xl px-3 py-2">
          <button onClick={() => setColor("red")} className="bg-red-600 rounded-xl w-20 h-10 text-white text-xl">
            Red
          </button>
          <button onClick={() => setColor("pink")} className="bg-pink-500 rounded-xl w-20 h-10 text-white text-xl">
            Pink
          </button>
          <button onClick={() => setColor("green")} className="bg-green-600 rounded-xl w-20 h-10 text-white text-xl">
            Green
          </button>
          <button onClick={() => setColor("yellow")} className="bg-yellow-300 rounded-xl w-20 h-10 text-white text-xl">
            Yellow
          </button>
          <button onClick={() => setColor("blue")} className="bg-blue-500 rounded-xl w-20 h-10 text-white text-xl">
            Blue
          </button>
          <button onClick={() => setColor("purple")} className="rounded-xl w-20 h-10 text-white text-xl" style={{backgroundColor:"purple"}}>
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
