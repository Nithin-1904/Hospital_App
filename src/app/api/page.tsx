"use client"
import React, { useState } from "react";

const Api = () => {
  const [data, setData] = useState({});

  const makeCall = async()=>{
    const res = await fetch("VVk3S3NOQjBoRklxSG92OFhrZW8zTDRkdmJVeFZOeXl6Rnh1TE4yUg==")
    const json = await res.json()
    setData(json)
  }

  return (
    <div className="m-5 flex  flex-col justify-center items-center">
      <button onClick={makeCall} className="p-5 bg-green-500 my-5 rounded-lg">Make API call</button>
      <pre className="text-3xl">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Api;
