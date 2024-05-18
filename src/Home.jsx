import React from 'react'
import { useDispatch,useSelector } from 'react-redux';

function Home() {
    const value = 20;
    const dispatch = useDispatch();


    const {c}=useSelector(state.custom)
    const addBtn = () => {
        dispatch({
            type: "increment",
            payload:25
        })
    }
    
    const addBtn25 = () => {
        dispatch({
            type:"incrementByValue"
        })
    }  




    const subBtn = () => {
           dispatch({
            type:"increment"
        })
    }

  return (
      <div>
          
          <h1>{c}</h1>
          
          <button onClick={addBtn}>Increment</button>

          <button onClick={addBtn}>Increment By 25</button>

          <button onClick={subBtn}>Decrement</button>


    </div>
  )
}

export default Home