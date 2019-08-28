import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person'
import './Person/Person.css'

class App extends Component {
  //class components
  state = { /* special property provided by Component class */
    person: [
      { id: 'adad1', name: 'Rohan', age: '20' },      //merges with old state
      { id: 'fgsa2', name: 'Sammy', age: '19' },
      { id: 'asds3', name: 'Nishant', age: '18' }
    ],
    showPerson: false
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!!')
    // invalid! : this.state.person[0].name = 'garg'
    this.setState({
      person: [
        { name: 'Rohan', age: 20 },
        { name: 'Sammy', age: 19 },
        { name: newName, age: 18 }
      ]
    })
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    })
    const person = { ...this.state.person[personIndex] }

    person.name = event.target.value;

    const persons = [...this.state.person]
    persons[personIndex] = person;

    this.setState({
      person: persons
    })
  }

  togglePersonHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    })
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.person];
    persons.splice(index, 1)
    this.setState({
      person: persons
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    let person = null;

    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.person.map((p, index) => {
            return <Person click={this.deletePersonHandler.bind(this, index)}
              name={p.name}
              age={p.age}
              key={p.id}
              change={(event) => { this.nameChangeHandler(event, p.id) }} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hey, I'm pracicing react!</h1>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {person}
      </div>
    )
  }
}


export default App;


//for functional components
// const [personState, setPersonState] = useState({
//   person: [
//     { name: 'Rohan', age: '20' },
//     { name: 'Sammy', age: '19' },
//     { name: 'Nishant', age: '18' }
//   ]
// })

// //can use multiple useState
// const switchNameHandler = () => {
//   setPersonState ({  //replaces the old state
//     person: [
//       { name: 'ROHAN', age: '20' },
//       { name: 'Sammy', age: '19' },
//       { name: 'Nishant', age: '18' }
//     ]
//   })
// }

// <Person name={this.state.person[0].name}
// age={this.state.person[0].age}
// click={() => this.switchNameHandler('yass')}>I enjoy playing Lawn Tennis</Person>
// {/* bind is better option as more efficient*/}
// <Person name={this.state.person[1].name}
// age={this.state.person[1].age}
// change={this.nameChangeHandler} />
// <Person name={this.state.person[2].name} age={this.state.person[2].age} onClick={this.switchNameHandler.bind(this, 'OMG')} />