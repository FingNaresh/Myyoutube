import React from 'react'
import Button from './Button'

const list = ["All", "Gaming", "Songs", "Live", "Cricket", "Cooking", "Sports", "Movies", "Podcasts"]

const ButtonList = () => {
  return (
    <div className='flex overflow-x-auto whitespace-nowrap'>
      {list.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  )
}

export default ButtonList
