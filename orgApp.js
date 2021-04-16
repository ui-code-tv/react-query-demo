import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";

// This is a typical component with an Asynchronus data fetch 
// We are using Axios here, but can use standard js fetch command.
function App() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const response = await axios("http://swapi.dev/api/planets/");

        setData(response.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Starwars Planets</h1>
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
           {(JSON.stringify(data) !== '{}') && data.results.map((planet,index) =><p key={index}>{planet.name}</p>)}           
        </div>
      )}
    </div>
  );
}
export default App;
