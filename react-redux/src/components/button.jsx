import React from 'react'
import { useSelector } from 'react-redux'

const Button = (props) => {
  const darkMode = useSelector(state=> state.darkMode)
  return (
    <button onClick={props.onClick} className={`${darkMode? 'bg-blue-500':'bg-black'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
          {props.children}
        </button>
  )
}

export default Button