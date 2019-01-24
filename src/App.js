import React, { Component } from 'react';
import './App.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      age: '',
      weight: '',
      height: '',
      actLevel: '',
      intake: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  renderIntake(gender,age,weight,height,actLevel){

    let levels = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      heavy: 1.725
    }
    if (gender === "male"){
      let p1 = (weight * 6.23) + (height * 12.7);
      let p2 = age * 6.8;
      let p3 = p1-p2;
      let basalMetabolic = p3 +66;
      let caloricIntake = basalMetabolic * levels[actLevel];
  
      return caloricIntake
    }
    else {
      let p1 = (weight * 4.35) + (height * 4.7);
      let p2 = age * 4.7;
      let p3 = p1-p2;
      let basalMetabolic = p3 + 655;
      let caloricIntake = basalMetabolic * levels[actLevel];
  
      return caloricIntake
    }
  }

  handleChange(event) {
    if (event.target.name === 'gender'){
      this.setState({gender: event.target.value});
    }
    else if (event.target.name === 'age'){
      this.setState({age: event.target.value});
    }
    else if (event.target.name === 'weight'){
      this.setState({weight: event.target.value});
    }
    else if (event.target.name === 'height'){
      this.setState({height: event.target.value});
    }
    else if (event.target.value === 'sedentary'){
      this.setState({actLevel: event.target.value});
    }
    else if (event.target.value === 'light'){
      this.setState({actLevel: event.target.value});
    }
    else if (event.target.value === 'moderate'){
      this.setState({actLevel: event.target.value});
    }
    else if (event.target.value === 'heavy'){
      this.setState({actLevel: event.target.value});
    }
  }
  //have this return handle intake
  handleSubmit(event) {
    let calories = this.renderIntake(this.state.gender,this.state.age,this.state.weight,this.state.height,this.state.actLevel);
    let round = Math.floor(calories);
    this.setState({intake: round});
    event.preventDefault();
  }

  render() {
    return (
      <div class="theCalc">
        <form onSubmit={this.handleSubmit}>
          <div class="theRow">
            <label>
              Male:
              <input type="radio" value="male" onChange={this.handleChange} name="gender" />
              {' '}
              Female:
              <input type="radio" value="female" onChange={this.handleChange} name="gender"/>
            </label>
          </div>
          <div class="theRow">
            <br/>
              <label>
                Age: {' '}
                <input type="text" onChange={this.handleChange} name="age" />
              </label>
            <br/>
          </div>
          <div class="theRow">
              <label>
                Weight: {' '}
                <input type="number" onChange={this.handleChange} name="weight" />
              </label>
            <br/>
          </div>
          <div class="theRow">
              <label>
                Height: (in) {' '}
                <input type="number" onChange={this.handleChange} name="height" />
              </label>
            <br />
          </div>
          <label>
            Activity level: {' '}
            <select value={this.state.actLevel} onChange={this.handleChange}>
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

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  render() {
    return (
      <div>
        <NameForm/>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.table = <Table />;

  }
  render() {
    return (
      <div className="App">
        {this.table}
      </div>
    );
  }
}


export default App;
