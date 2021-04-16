import React, { useState, useEffect } from "react";
import {useQuery} from 'react-query';
import './App.css';
import axios from "axios";

// This is a typical component with an Asynchronus data fetch 
// We are using Axios here, but can use standard js fetch command.
function App() {

  const fetch = axios("http://swapi.dev/api/planets/");
  
  const { isLoading, error, data } = useQuery('swApi', () => fetch );


  if (isLoading) return 'Loading...'
 
  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="App">
      <h1>Starwars Planets</h1>
      
        <div> 
           {(JSON.stringify(data) !== '{}') && data.data.results.map((planet,index) =><p key={index}>{planet.name}</p>)}           
        </div>
   
    </div>
  );
}
export default App;
