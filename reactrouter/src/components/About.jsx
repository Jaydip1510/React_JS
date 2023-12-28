import React from 'react'
import { useParams } from 'react-router-dom'

function About() {
  const {id,name} = useParams();
  return (
    <div>
      <h4>About Page</h4>
      <h3>Id is:-{id}</h3>
      <h3>Name is:-{name}</h3>
    </div>
  )
}

export default About
