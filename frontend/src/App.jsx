import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])
  useEffect(()=>{
    axios.get("/api/jokes")
    .then((response)=>{
      setjokes(response.data)
      console.log(response.data)
    })
    .catch((error)=>{
      console.error("Error fetching jokes: ", error)
    })
  })

  return (
    <>
    <h1>Demo fullstack app</h1>
    <p>JOKES : {jokes.length}</p>
    {
      jokes.map((joke, index)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.joke}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
