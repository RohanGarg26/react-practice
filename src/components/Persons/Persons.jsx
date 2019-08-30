import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
  // static getDerivedStateFromProps(props,state){
  //   console.log('getDerivedStateFromProps')
  // }

  shouldComponentUpdate(nextProps,nextState){
    console.log('shouldcompupdate')
    if(nextProps.persons === this.props.persons){
      return false
    }
    else{
      return true
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getsnap')
    return {message : 'snap!!'}
  }

  componentDidUpdate(prevProps, prevState, snapShot){
    console.log('didupdate')
    console.log(snapShot)
  }

  render() {
    console.log('Pesrons!!')
    return this.props.persons.map((p, index) => {
      return (
        <Person click={this.props.clicked.bind(this, index)}
          name={p.name}
          age={p.age}
          key={p.id}
          change={(event) => { this.props.changed(event, p.id) }}
        />
      )
    })
  }
}


export default Persons