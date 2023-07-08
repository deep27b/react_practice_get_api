import { useEffect, useState } from "react";
import { fetchData } from "./serviceApi";

function App() {

  const [data, setData]= useState(null);
  const [city, setCity]= useState("London");

   useEffect(() => {
    
    const fetchweatherdata = async () => {
        const wdata = await fetchData(city);
        setData(wdata);
        
    };
      fetchweatherdata();
  }, [city]);

   const enterKeyPressed = (e) => {
      if(e.keyCode === 13)
      {
        const nCity = e.currentTarget.value;
        setCity(nCity);
        e.currentTarget.blur();
        console.log(city);
      }
   };
    return ( <div>
    {data ? (
      <div>
        <input  onKeyDown={enterKeyPressed} type="text" name="city" placeholder= "Enter  City.." />
        <p>{data.name}</p>
        <p>{data.country} 
        <p>{data.temp}</p></p>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div> );
}

export default App;
