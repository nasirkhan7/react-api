import React, { useEffect } from "react";

const APIs = () => {
      const url = 'https://api.github.com/users';
      const getData = async() => {
        const response = await fetch(url);
        const data= await response.json();
        console.log(data)
      }
      useEffect(()=>{
        getData()
      },[])
  return(
   <>
  
  
  
  </>
  )
}

export default APIs;
