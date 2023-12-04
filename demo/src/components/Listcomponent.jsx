import React from 'react'

function Listitem (props) {
    return <li>{props.number}</li>
}
const Listcomponent = (props) => {
    const num = props.number;
    const listNum = num.map((i) =>{
        return <Listitem number={i} />
    })
  return (
    <div>
      <ul>
        <h3>Array List</h3>
        {listNum}
      </ul>
    </div>
  )
}

export default Listcomponent
