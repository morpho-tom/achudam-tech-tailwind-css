import React from 'react'
import SearchLogo from "../../assets/search.png"

const button = () => {
  return (<button className='bg-blue-400 
  hover:bg-blue-500 
  text-white 
  font-bold 
  py-2 
  px-4 
  rounded-full
  '>
    search
    <img
      className='inline-block'
      src={SearchLogo}
      alt='searchlogo' />
  </button>
  )

}

export default button