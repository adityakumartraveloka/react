import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'sdf', name: 'Aditya', age: '20' },
      { id: 'sadg', name: 'Ankush', age: '22' },
      { id: 'lh', name: 'Sourav', age: '24' },
      { id: 'i;uhiuh', name: 'Zen', age: '18'}
    ],
    showPersons: 'false',
    showCockpit: 'true'
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componetWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentWillUnmount() {
    console.log('[App.js] componentWillUnmount');
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidMount');
  }

  // switchNameHandler = (newName) => {
  //   // console.log("The button has clicked");
  //   this.setState({
  //     persons: [
  //       { name: newName, age: '23' },
  //       { name: 'Vaibhav', age: '21' },
  //       { name: 'Atul', age: '22' },
  //     ]
  //   });
  // }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonHander = (index) => {
    const persons = this.state.persons;
    persons.splice(index,1);
    this.setState({persons: persons});
  }

  render() {

    console.log('[App.js] render');

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          <Persons
            title={this.props.title}
            persons={this.state.persons}
            clicked={this.deletePersonHander}
            changed={this.changeNameHandler}  
          />
        </div>
      );

      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    return (
      <div className="App">

        <button onClick={ () => {
          this.setState({showCockpit: false})
        }}>Remove Cockpit</button>

        { 
        this.state.showCockpit ? 
          <Cockpit
            persons={this.state.persons}
            title={this.props.appTitle} 
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          /> : null 
        }
          {persons}
      </div>
    );
  }
}


export default App;
