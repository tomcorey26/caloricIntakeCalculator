import React, { Component } from 'react';
import './App.css';


class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: 'male',
      age: '20',
      weight: '150',
      height: '67',
      actLevel: 'sedentary',
      intake: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  renderIntake(gender,age,weight,height,actLevel){
    console.log(this.state);
    let modifiers = {
      male: {
        weight: 6.23,
        height: 12.7,
        age: 6.8,
        basalMetabolic: 66
      },
      female: {
        weight: 4.35,
        height: 4.7,
        age: 4.7,
        basalMetabolic: 655
      }
    }
  
    let levels = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      heavy: 1.725
    }
    
    const modifier = modifiers[gender];
    let p1 = (weight * modifier["weight"]) + (height * modifier["height"]);
    let p2 = age * modifier["age"];
    let p3 = p1-p2;
    let basalMetabolic = p3 + modifier["basalMetabolic"];
    let caloricIntake = basalMetabolic * levels[actLevel];

    return caloricIntake
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(value);
    this.setState({
      [name]: value
    });
  }
  //have this return handle intake
  handleSubmit(event) {
    console.log(this.state);
    let calories = this.renderIntake(this.state.gender,this.state.age,this.state.weight,this.state.height,this.state.actLevel);
    let round = Math.floor(calories);
    this.setState({intake: round});
    event.preventDefault();
  }

  render() {
    return (
      <div className="calc">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <label>
              <span id="male-gender-input">
                Male:
                <input type="radio" value="male" name="gender" onChange={this.handleChange} name="gender" />
              </span>
              Female:
              <input type="radio" value="female" name="gender" onChange={this.handleChange} name="gender"/>
            </label>
          </div>
          <div className="row">
            <br/>
              <label>
                <span className="title">Age: </span>
                <input type="text" onChange={this.handleChange} name="age" />
              </label>
            <br/>
          </div>
          <div className="row">
              <label>
                <span className="title">Weight: </span> 
                <input type="number" onChange={this.handleChange} name="weight" />
              </label>
            <br/>
          </div>
          <div className="row">
              <label>
                <span className="title">Height: (in) </span>
                <input type="number" onChange={this.handleChange} name="height" />
              </label>
            <br />
          </div>
          <label>
            <span className="title">Activity level:</span>
            <select value={this.state.actLevel} onChange={this.handleChange} name="actLevel">
              <option value="sedentary">Sedentary (No Exercise)</option>
              <option value="light">Light (1-2 days)</option>
              <option value="moderate">Moderate (3-5)</option>
              <option value="heavy">Heavy (Every day)</option>
            </select>
          </label>
          <br/>
          <br/>
          <input id="submit" type="submit" value="Submit" />
          <h1>Daily Caloric intake: <br/>
              <div id="intake">{this.state.intake}</div>
          </h1>
        </form>
      </div>
    );
  }
}

function App() {
    return (
      <div className="App">
        <NameForm/>
      </div>
    );
}


export default App;
