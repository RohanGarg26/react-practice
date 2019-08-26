import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  //class components
  state = { /* special property provided by Component class */
    person: [
      { name: 'Rohan', age: '20' },      //merges with old state
      { name: 'Sammy', age: '19' },
      { name: 'Nishant', age: '18' }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!!')
    // invalid! : this.state.person[0].name = 'garg'
    this.setState({
      person: [
        { name: newName, age: 20 },
        { name: 'Sammy', age: 19 },
        { name: 'Nishant', age: 18 }
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Hey, I'm pracicing react!</h1>
        <button onClick={this.switchNameHandler.bind(this, 'OMG')}>Switch Name</button>
        <Person name={this.state.person[0].name}
          age={this.state.person[0].age}
          click={() => this.switchNameHandler('yass')}>I enjoy playing Lawn Tennis</Person>
        {/* bind is better option as more efficient*/}
        <Person name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, 'bwahaha')} />
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
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