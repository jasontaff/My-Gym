
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Workout from './components/Workout'
import Generator from './components/Generator'
import { useState } from 'react'
import { generateWorkout } from './utils/functions'


function App() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState("strengh_power")


  function updateWorkout(){
    if(muscles.length < 1){
      return
    }
    let newWorkout = generateWorkout(muscles, poison, goal)
    console.log(newWorkout)
    setWorkout(newWorkout)
  }

  return (
    <main className ="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white tet-sm sm:text-base">
      <Hero/>
      <Generator 
      poison={poison} 
      setPoison={setPoison} 
      muscles={muscles}
      setMuscles={setMuscles}
      goal={goal}
      setGoal={setGoal}
      updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout}/>) }
    </main>
  )
}

export default App
