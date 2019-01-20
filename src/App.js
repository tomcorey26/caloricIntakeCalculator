import React, { Component } from 'react';
import './App.css';
//import ReactDOM from 'react-dom'

//figure out how react forms work
//have input buttons for table which alter calorie intake properties
//figure out how to make text stay to left

function Intake(props) {
  let levels = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    heavy: 1.725
  }
  if (props.gender === "male"){
    let p1 = (props.weight * 6.23) + (props.height * 12.7);
    let p2 = props.age * 6.8;
    let p3 = p1-p2;
    let basalMetabolic = p3 +66;
    let caloricIntake = basalMetabolic * levels[props.actLevel];

    return <h1>Your caloric intake is: {caloricIntake}</h1>;
  }
  else {
    let p1 = (props.weight * 4.35) + (props.height * 4.7);
    let p2 = props.age * 4.7;
    let p3 = p1-p2;
    let basalMetabolic = p3 + 655;
    let caloricIntake = basalMetabolic * levels[props.actLevel];

    return <h1>Your caloric intake is: {caloricIntake}</h1>;
  }
}
  


class Table extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>Gender</td>
          </tr>
          <tr>
            <td>Age</td>
          </tr>
          <tr>
            <td>Weight</td>
          </tr>
          <tr>
            <td>Activity level</td>
          </tr>
          <tr>
            <td>Weight Goal</td>
          </tr>
          <tr>
            <td><Intake gender="female" weight="150" height="67" age="20" actLevel="light"></Intake></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.table = <Table/>;

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
