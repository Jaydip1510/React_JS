import React, { useEffect, useRef, useState } from 'react'

const Userefcomponent = () => {
  const [inputValue,setIntputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  })
  return (
    <div>
        <h1>Count is:{count.current}</h1>
        <input type="text" value={inputValue} onChange={(e) => setIntputValue(e.target.value)} />
    </div>
  )
}

export default Userefcomponent
