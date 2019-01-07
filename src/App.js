import React, { Component } from 'react';

import{BrowserRouter as Router,Route,Link}from "react-router-dom"
import './App.css';

import Titles from './components/titile'
import Form from './components/form'
import Weather from './components/weather'
const API="04a3f298889821e68d6b0339e89a6de5";

class App extends Component {
  state={
    temprature: undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }
  getWeather = async(e)=> {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
     const api_call =await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API}&units=metric`)
     
     const data = await api_call.json();
    if(city&&country){   
     console.log(data)
     this.setState({
       temprature: data.main.temp,
       city: data.name,
       country: data.sys.country,
       humidity: data.main.humidity,
       description: data.weather[0].description,
       error:""
     })}
     else{
      this.setState({
        temprature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error:"please enter the city"
      })

     }
     
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
              <div className="col-xs-5 title-container">
              <Titles />
              </div>
                <div className="col-xs-7 form-container">
                 <Form getWeather={this.getWeather}/>
                  <Weather 
                  temprature={this.state.temprature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
       
      </div>
            
    );
  }
}

export default App;

       