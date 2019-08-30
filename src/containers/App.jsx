import React, { Component } from 'react';
import styleClasses from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Auxiliary from '../hoc/Auxiliary'
import withClass from '../hoc/withClass'

class App extends Component {

  constructor(props) {
    super(props)
    console.log('constructing!!')
    this.state = { /* special property provided by Component class */
      persons: [
        { id: 'adad1', name: 'Rohan', age: '20' },      //merges with old state
        { id: 'fgsa2', name: 'Sammy', age: '19' },
        { id: 'asds3', name: 'Nishant', age: '18' }
      ],
      showPerson: false,
      showCockpit: true,
      changeCounter: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStatefromProps', props)
    return state
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  //class components

  switchNameHandler = (newName) => {
    // console.log('was clicked!!')
    // invalid! : this.state.person[0].name = 'garg'
    this.setState({
      persons: [
        { name: 'Rohan', age: 20 },
        { name: 'Sammy', age: 19 },
        { name: newName, age: 18 }
      ]
    })
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;
// changing state correctly
    this.setState((prevState) => {
      return{
        persons: persons,
        changeCounter: prevState.changeCounter+1
      }
    })
  }

  togglePersonHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    })
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1)
    this.setState({
      persons: persons
    })
  }

  render() {
    console.log('render!!')
    let person = null;

    if (this.state.showPerson) {
      person = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
        </div>
      );
    }

    return (
      <Auxiliary>
        <button onClick={() => {
          this.setState({
            showCockpit: !this.state.showCockpit
          })
        }}>toggle cockpit</button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPerson={this.state.showPerson}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler} />
        ) : null}
        {person}
      </Auxiliary>
    )
  }
}


export default withClass(App, styleClasses.App);