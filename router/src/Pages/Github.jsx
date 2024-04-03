import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([]);
  // const [d, setD] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/mr-dev-prince")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  //     fetch("https://api.github.com/users/Himanshipatel04").then(response => response.json()).then((d) => {
  //       console.log(d);
  //       setD(d)
  //     })
  // }, []);

  return (
    <div>
      <h1>This is github page of {data.name} and followers are {data.followers}</h1>
      <img src={data.avatar_url} alt="" />
      {/* <h1>This is github page of {d.name} and followers are {d.followers}</h1>
      <img src={d.avatar_url} alt="" /> */}
    </div>
  );
}

export default Github;

export const loaderinfo = async () => {
    const response = await fetch("https://api.github.com/users/mr-dev-prince")
    return response.json()
}
