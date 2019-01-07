import React, { Component } from 'react';
class Weather extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="weather__info">
            { 
                this.props.city&&this.props.country&&
                <p className="weather__key"> 
                    loaction:
                   <span className="weather__value"> {this.props.city},{this.props.country}</span>
                    </p> 
                }
             {
                 this.props.temprature&&
                 <p className="weather__key"> 
                     temprature:
                     <span className="weather__value">{this.props.temprature}</span>
                 </p>
                 }
              {
                  this.props.humidity&&
                  <p className="weather__key"> 
                      humidity:
                      <span className="weather__value">{this.props.humidity}</span>
                      </p>
                    }
              {
                  this.props.description&&
                  <p className="weather__key"> 
                      description:
                      <span className="weather__value">{this.props.description}</span>
                      </p>
                    }
              <span className="weather__value">{this.props.error}</span>
              
            </div>
         );
    }
}
 
export default Weather;
