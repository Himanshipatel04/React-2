import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [len, setLen] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [pass, setPass] = useState("");

  const passRef = useRef(null);

  const copyPassword = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  const passGen = useCallback(() => {
    let passw = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowNum) str += "0123456789";
    if (allowChar) str += "#%$!@*&^-";
    for (let i = 0; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      passw += str.charAt(char);
    }
    setPass(passw);
  }, [len, allowNum, allowChar, setPass]);

  useEffect(() => {
    passGen();
  }, [len, allowChar, allowNum, passGen]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md px-4 py-6 rounded-lg text-orange-500 bg-pink-300 ">
      <h1 className="text-black text-center my-2 text-2xl">
        Password Generator
      </h1>
      <div className="flex shadow-lg rounded-md overflow-hidden md-4 text-black font-bold">
        <input
          type="text"
          value={pass}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passRef}
        />
        <button
          onClick={() => {
            copyPassword();
            alert("Copied!");
          }}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2 pt-5">
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={20}
            value={len}
            onChange={(e) => {
              setLen(e.target.value);
            }}
            className="cursor-pointer"
          />
          <label className="text-black" htmlFor="">
            Length:{len}
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={allowNum}
            id="numberInput"
            onChange={() => {
              setAllowNum((prev) => !prev);
            }}
          />
          <label className="text-black">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={allowChar}
            id="charInput"
            onChange={() => {
              setAllowChar((prev) => !prev);
            }}
          />
          <label className="text-black">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
