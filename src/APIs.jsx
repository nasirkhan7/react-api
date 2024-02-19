import React, { useEffect, useState } from "react";
import SinglePerson from "./SinglePerson";
import {RingLoader} from "react-spinners";

const APIs = () => {
  const url = "https://api.github.com/users";
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    setLoading(true)
    const response = await fetch(url);
    const data = await response.json();
    setPeople(data);
    setLoading(false)
  };
  useEffect(() => {
    getData();
  }, [])
    if(loading){
        return <div style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <RingLoader color="#36d7b7" />
        </div>
    }
    return (
    <>
      <div className="conatiner text-center">
        <h1 className="display-5">Gihub profiles</h1>
        <div className="row">
          {people.map((person) => {
            return (
              <>
                <div key={person.id} className="col-md-3">
                  <div className="card my-1">
                    <SinglePerson {...person} />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default APIs;
