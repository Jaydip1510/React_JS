import React from 'react'

export default function FetchApi() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        localStorage.setItem("users", JSON.stringify(data));
    })
  return (
    <div>FetchApi</div>
  )
}
