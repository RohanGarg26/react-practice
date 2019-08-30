import React, { useEffect, useRef } from 'react'
import styleClasses from './Cockpit.module.css'

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null)

  useEffect(() => {
    console.log('useeffect')
    toggleBtnRef.current.click()
  }, [])

  let btnClass = '';
  let classes = []
  if (props.showPerson) {
    btnClass = styleClasses.red;
  }
  if (props.personsLength <= 2) {
    classes.push(styleClasses.red)
  }
  if (props.personsLength <= 1) {
    classes.push(styleClasses.bold)
  }

  return (
    <div className={styleClasses.Cockpit}>
      <h1 className={classes.join(' ')}>{props.title}</h1>
      <button
        onClick={props.clicked}
        className={btnClass}
        ref={toggleBtnRef}
      >Toggle Persons</button>
    </div>
  )
}

export default React.memo(Cockpit)