import React, {useState} from "react";
import "./DailyWeather.css";
import axios from "axios";
import WeatherDay from "./WeatherDay"


export default function DailyWeather (props){
let [ready, setReady] = useState(false);
let [data, setData]= useState(null);

    function handleResponse(response){
        console.log(response.data);
      setReady(true);
      setData(response.data);
    
    
}


    if (ready){

    return ( <div className= "DailyWeather">
       
        <div className="row">

            {data.daily.slice(0,3).map(function (day,index){
     
            return (<div  className="col" key={index}> <WeatherDay data={day}/> 
            
        
            
            </div>
            );
             })}          
                  </div>        
               </div>
    );
        }
         
                   
                   else {
                 
                 
                    
    let apiKey = "bd75f0b07t2b8413f599c23a504017fo";
    let lat = props.data.latitude;
    let lon = props.data.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;}}