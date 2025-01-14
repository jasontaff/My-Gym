import React from 'react'
import SectionWrapper from './SectionWrapper'
import Button from './Button'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import { useState } from 'react'

function Header(props){
  const {index, title, description} = props
  return (
    <div className="flex flex-col gap-4 py-4" >
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xp font-semibold text-slate-400">{index}</p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  )
}

export default function Generator(props) {
  const {muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout} = props
  const [showModel, setShowModel] = useState(false)


  function toggleModel(){
    setShowModel(!showModel)
  }

  function updateMuscles(muscleGroup){
    if(muscles.includes(muscleGroup)){
      setMuscles(muscles.filter(val =>  val !==muscleGroup ))
      return
    }

    if(muscles.length > 2) {
      return
    }

    if(poison !== 'individual'){
      setMuscles([muscleGroup])
      setShowModel(false)
      return
    }


    setMuscles([...muscles, muscleGroup])
    if(muscles.length === 2 ){
      setShowModel(false)
    }
   
  }

  return (
    <SectionWrapper header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
      <Header index={'01'} title={'Pick Your Poison'} description ={'Select the Workout you wish to edure'} />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return(
            <button onClick={() =>{
              setMuscles([])
              setPoison(type)
            }} key={typeIndex} className={'bg-slate-950 border duration-200 px-4 hover:border-blue-600 py-3 rounded-lg ' + (type === poison ? 'border-blue-600' : 'border-blue-400')}>
              <p className="capitalize">{type.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div>

      <Header index={'02'} title={'Lock on targets'} description ={'Select the muscles judged for annihilation'} />
      <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
        <button onClick={toggleModel}className="relative py-3 flex items-center justify-center">
          <p className="capitalize">{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModel && (
          <div className="flex flex-col p-3">
            { (poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button onClick={() => {updateMuscles(muscleGroup)}}
                 key={muscleGroup}
                className={'hover:text-blue-400 duration-200 px-4' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}
                >
                  <p className="uppercase">
                    {muscleGroup.replaceAll('_', '')}
                    </p>
                </button>
              );
           })}
          </div>
        )}
      </div>


      <Header index={'03'} title={'Become Juggernaut'} description ={'Select your utimate objective.'} />
      <div className="grid grid-col-1 sm:grid-cols-3  gap-4 py-4">
      {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return(
            <button onClick={() =>{
              setGoal(scheme)
            }} key={schemeIndex} className={'bg-slate-950 border duration-200 hover:border-blue-600 py-3 rounded-lg py-4' + (scheme === goal ? 'border-blue-600' : 'border-blue-400')}>
              <p className="capitalize">{scheme.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div>



      <Button func={updateWorkout} text ={"Formulate"}></Button>
    </SectionWrapper>

  )
}
