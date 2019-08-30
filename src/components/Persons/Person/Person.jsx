import React, { Component } from 'react';
import PropTypes from 'prop-types'

import styleClasses from './Person.module.css'
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'

class Person extends Component {
  constructor(props){
    super(props)
    this.inputElementRef = React.createRef()
  }

  componentDidMount() {
    // this.inputElement.focus()
    this.inputElementRef.current.focus()
  }

  render() {
    console.log('person!')
    return (
      // can use inbuilt wrapper React.Fragment instead of auxiliary
      <Auxiliary>
        <p onClick={this.props.click}>My name is {this.props.name} and age is {this.props.age}</p>
        <input type="text"
          // ref={(inputEl) => { this.inputElement = inputEl }}, compatible with older versions
          ref = {this.inputElementRef}
          onChange={this.props.change}
          defaultValue={this.props.name}
        />
      </Auxiliary>
    )
  }
}

//useful when working with other people
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, styleClasses.Person)