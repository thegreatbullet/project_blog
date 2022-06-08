import { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {
  const [todos, setTodos] = useState([])

  let api_website = 'http://127.0.0.1:8000/api/'

  useEffect(() => {
    ;(async function () {
      let data = await fetch(api_website).then((res) => res.json())
      setTodos(data)
    })()
  })

  return (
    <div>
      {todos.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}
