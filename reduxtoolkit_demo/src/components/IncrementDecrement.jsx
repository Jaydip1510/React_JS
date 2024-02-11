import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DecrementValue, IncrementValue } from '../redux/Reducers';

function IncrementDecrement() {
  const ctData = useSelector((state) => state.user.cnt);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Count is: {ctData}</h3>
      <button type='button' onClick={() => dispatch(IncrementValue())}>Increment</button>
      <button type='button' onClick={() => dispatch(DecrementValue())}>Decrement</button>
    </div>
  );
}

export default IncrementDecrement;