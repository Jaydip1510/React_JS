// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { add, sub } from '../Action/Action'

// function Redux() {
//     const cnt = useSelector(state => state.cnt)
//     const dispatch = useDispatch()
//   return (
//     <div>
//           <h3 style={{color:'blue'}}>count is :-</h3> 
//           <b style={{fontSize:30,color:'green'}}>{cnt}</b>
//           <br/><br/>
//           <button className='btn btn-info' onClick={()=> dispatch(add())}>Incerment</button>&nbsp;&nbsp;
//           <button className='btn btn-warning' onClick={()=> dispatch(sub())}>Decrement</button>      
//     </div>
//   )
// }
// export default Redux

import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../Action/Action';

const Redux = ({ count, increment, decrement }) => {
  return (
    <div>
      <h2>Count: {count}</h2>
      <button className='btn btn-info' onClick={increment}>Increment</button>&nbsp;&nbsp;
      <button className='btn btn-warning' onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);

