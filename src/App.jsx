import React, { Component } from 'react';
import styleClasses from './App.module.css';
import Person from './Person/Person'

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
    let person = null;
    let btnClass = '';

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
      btnClass = styleClasses.red;
    }

    let classes = []
    if (this.state.person.length <= 2) {
      classes.push(styleClasses.red)
    }
    if (this.state.person.length <= 1) {
      classes.push(styleClasses.bold)
    }

    return (
        <div className={styleClasses.App}>
          <h1 className={classes.join(' ')}>Hey, I'm pracicing react!</h1>
          <button onClick={this.togglePersonHandler} className={btnClass}>Toggle Persons</button>
          {person}
        </div>
    )
  }
}


export default App;