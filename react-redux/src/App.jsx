//Components
import Button from "./components/button"
import Input from "./components/input"

// Hooks
import { useSelector,useDispatch } from "react-redux"
import { useState } from "react"

//Slices
// import { decrement, increment,reset, customAddValue } from "./slices/counterSlice"
// import { toggleDarkMode } from "./slices/darkSlice"

//react-icons
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { addCustomValue, decrement, increment, reset } from "./slices/counterSlice";
import { toggleDarkMode } from "./slices/darkSlice";

function App() {
  const [inptValue, setInptValue] = useState('')
  const count = useSelector(state=> state.counter)
  const darkMode = useSelector(state=> state.darkMode)
  const dispatch = useDispatch()
  const inrementFunc = ()=>[
    dispatch(increment())
  ]
  const decrementFunc = ()=>{
    dispatch(decrement())
  }
  const resetFunc = ()=>{
    dispatch(reset())
  }
  const customAddValue = ()=>{
    if(inptValue){
      dispatch(addCustomValue(parseInt(inptValue)))
    }
    setInptValue('')
  }
  const darkModeFunc = ()=>{
    dispatch(toggleDarkMode())
  
  }
  return (
    <>
      <div className={`mx-auto flex h-[100vh] w-full items-center justify-center gap-4 ${darkMode? 'bg-black':'bg-white'}`}>
          <Button onClick={darkModeFunc}>{darkMode? <MdDarkMode/> :<MdOutlineDarkMode/>}</Button>
          <Button onClick={inrementFunc}>Increment</Button>
          <p className={`${darkMode? 'text-white':'text-black'}`}>{count}</p>
          <Button onClick={decrementFunc}>Decrement</Button>
          <Button onClick={resetFunc} >Reset</Button>
          <Input
          value={inptValue}
          onChange={(event)=> setInptValue(event.target.value.trim())}
          />
          <Button onClick={customAddValue}>Add</Button>
      </div>
    </>
  )
}

export default App
