import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment } from '../redux/Reducers';

function IncrementDecrement() {
    const ctData = useSelector((state) => state.cntData.cnt)
    const dispatch = useDispatch();
  return (
    <div>
         <button type='button' onClick={()=> dispatch(Increment())}/>
         <button type='button' onClick={()=> dispatch(Decrement())}/>
      
    </div>
  )
}

export default IncrementDecrement
