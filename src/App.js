import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import Person from './Persons/Person'

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 2px solid blue;
    padding: 8px;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen' };
      color: black;
    };  
`;

class App extends Component {
  state = {
    persons: [
      { id: 'sdf', name: 'Aditya', age: '20' },
      { id: 'sadg', name: 'Ankush', age: '22' },
      { id: 'lh', name: 'Sourav', age: '24' },
      { id: 'i;uhiuh', name: 'Zen', age: '18'}
    ]
  };

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
          {
            this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonHander(index)} 
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.changeNameHandler(event, person.id)}/>
            })
          }
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
        <h1>This is the react demo.</h1>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle
        </StyledButton>
            {persons}
      </div>
    );
  }
}


export default App;
