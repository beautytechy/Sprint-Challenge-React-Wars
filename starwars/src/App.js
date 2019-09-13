import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "../../starwars/node_modules/axios"
import PeopleCard from "./PeopleCard"

const App = () => {
  const [peopleInfo, setpeopleInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`).then(response => {

        const peopleInfo = response.data.results;
        console.log(response.data.results);
        setpeopleInfo(peopleInfo);
      })
      .catch(error => {
        console.log("API data was not returned", error);
      });
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      {peopleInfo.map(info => {
        console.log(info);
        return (
          <PeopleCard
            key={info.index}
            name={info.name}
            height={info.height}
            mass={info.mass}
          />
        )
      })
      }
    </div>
  )
}



export default App;
