const API_KEY ='bb524ce2b0e89a510a3e77191905c3e7' ;
    const fetchData = async (city) => {
      try {
        console.log(city);
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const data = await fetch(URL)
        .then((res) => res.json())
        .then((data)=> data);

        const {weather, main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
        wind:{speed},
        sys:{ country},
        name,
        } = data;
    
       
    
        return {
          
            temp, feels_like, temp_max, temp_min, pressure, humidity, speed, country, name, 
        };
      
    }
      catch (error) {
        console.error('Error fetching data:', error);
      }
  
    };
  export {fetchData};