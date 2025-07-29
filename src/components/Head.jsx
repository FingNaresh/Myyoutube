import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img 
        className='h-8'
         alt="menu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s"/>
      <img 
        className='h-8 mx-2'
      alt="youtube-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45UNTww5HJBpMDY2Rh54zVMUCRnyApgGVWw&s"/>
    </div>
    <div className='col-span-10 px-10'>
        <input className='w-1/2 border-gray-400 p-2 rounded-l-full' type="text"/>
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>🔍︎</button>
    </div>
    <div className='col-span-1'>
    <img
    className='h-8'
     alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7qKgRvChw4p7QLmLJ_Vw2PyM11C6ThI6oA&s"/>
    </div>
    </div>
  );
};

export default Head
