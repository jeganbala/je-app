import React, { Component } from 'react';
class Form extends Component {
    state = {  }
    render() { 
        return ( 
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="city..."/>
                <input type="text" name="country" placeholder="country..."/>
                <button>get weather</button>
            </form>
         );
    }
}
 
export default Form;