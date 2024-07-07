/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./weather.css"
function Weather() {
    const [weather,setWeather] = useState();
    const [city,setCity] = useState("patna");
    const [input,setInput] = useState();
  
    const apiKey = "71f113f3e25a44b0177e149d7b1ca337"  // Your API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            setWeather(data.main.temp);
            console.log(data.main.temp)
        })
    },[city])
    const handleInputCity =(e)=>{
        setInput(e.target.value)
    }
    const handleBtnShow= ()=>{
        setCity(input);

    }
  return (
    <div className="cen">
      <div className="cen card text-center mb-3" style={{ width: '18rem' }}>
        <input type="text" name="" id="" onChange={handleInputCity} />
        <div className="card-body ">
          <h2 className="card-title">Today Weather: </h2>
          {
            weather !== null ? <h4>Temp: {weather}</h4>: <p>Loading..</p>
          }
          <p className="card-text">
           City: {city.charAt(0).toUpperCase()+city.slice(1)}
          </p>
          <button className="btn btn-primary" onClick={handleBtnShow}>
            Click
          </button>
        </div>
      </div>
    </div>
  );
}

export default Weather;



