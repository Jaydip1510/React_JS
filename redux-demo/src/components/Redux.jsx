import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, sub } from '../Action/Action'

function Redux() {
    const cnt = useSelector(state => state.cnt)
    const dispatch = useDispatch()
  return (
    <div>
          <h3 style={{color:'blue'}}>count is :-</h3> <b style={{fontSize:30}}>{cnt}</b><br/><br/>
          <button onClick={()=> dispatch(add())}>Incerment</button>&nbsp;&nbsp;
          <button onClick={()=> dispatch(sub())}>Decrement</button>      
    </div>
  )
}

export default Redux
