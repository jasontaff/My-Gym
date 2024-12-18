import React from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utils/swoldier'
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

export default function Generator() {
  const [showModel, setShowModel] = useState(false)

  function toggleModel(){
    setShowModel(!showModel)
  }

  return (
    <SectionWrapper header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
      <Header index={'01'} title={'Pick Your Posion'} description ={'Select the Workout you wish to edure'} />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return(
            <button key={typeIndex} className="bg-slate-950 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600">
              <p className="captialize">{type.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div>

      <Header index={'02'} title={'Lock on targets'} description ={'Select the muscles judged for annihilation'} />
      <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
        <button onClick={toggleModel}className="relative py-3 flex items-center justify-center">
          <p>Select muscle groups</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModel && (
          <div>modal</div>
        )}
      </div>

    </SectionWrapper>

  )
}
