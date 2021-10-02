import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
export default function News() {
  const getData = async () => {
    // your fetch URL should be relative to the root level of the public folder
    const res = await fetch("jsonFiles/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log(res);
    const parsed = await res.json();
    console.log(parsed)
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>The "news" path HomePage</h1>
    </div>
  ); // produces links to /news/1 and /news/2
}
/*

  const fetch= async function(){
    const response= await fetch("/backend.json")
    if(!response.ok) alert(4044)
    let parsedResponse= await response.json()
    return parsedResponse
  }
  useEffect(()=>{
    
    // const fetchResults= console.log(fetch())
    fetch()
  },[])
*/
