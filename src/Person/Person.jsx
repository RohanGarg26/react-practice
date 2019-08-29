import React from 'react';
import styleClasses from './Person.module.css'

const person = (props) => {
  return (
      <div className={styleClasses.Person}>
        <p onClick={props.click}>My name is {props.name} and age is {props.age}</p>
        <input type="text" onChange={props.change} defaultValue={props.name} />
      </div>
  )
}

export default person