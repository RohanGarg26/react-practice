import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>My name is {props.name} and age is {props.age}</p>
      <p>{props.children}</p> {/*special property of props to access to content in the custom component*/}
    </div>
  )
}

export default person