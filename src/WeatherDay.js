import React from "react";


export default function WeatherDay(props){
    function FormattedDay(){
        let date  = new Date (props.data.time*1000);

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

       let day = days[date.getDay()];
       return day;
    }
    function MaxTemp(){
        let temperature = props.data.temperature.maximum;
        return Math.round(temperature);
    } 
    function MinTemp(){
        let temperature = props.data.temperature.minimum;
        return Math.round(temperature);
    }

    

return (<div><div className="DailyWeatherDay">
            {FormattedDay()}
                </div>
                <div className="DailyWeatherIcon"> <img src={props.data.condition.icon_url} alt="/"/></div>
                <div className="DailyWeatherTemperature">
                    <span className="max">{MaxTemp()}°</span>
                    <span className="min">{MinTemp()}°</span>
                </div></div>);}