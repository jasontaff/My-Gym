import React from 'react'

export default function Button(props) {
    const {text, func} = props
  return (
    <button onClick={func} className='px-4 py-4 mx-auto rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blueShadow duration-200'>
        <p>{text}</p>
    </button>
  )
}
