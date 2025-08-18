import React from 'react'
import { useEffect } from 'react';
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName } from '../utils/helper';
import { makeRandomMessage } from '../utils/helper';
import { useState } from 'react';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch=useDispatch();

    const chatMessage = useSelector((store)=>store.chat.messages);

    useEffect(() => {
     const i =setInterval(() => {
        //API POLLING
        console.log("Polling for new messages");
        dispatch(addMessage({
            name:generateRandomName(),
            message: makeRandomMessage (20)+ " ",
        })
        );
     }, 2000);

     return ()=>clearInterval(i);
  }, []);

  return (
    <>
    <div className=' w-full h-[450px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
      {
        chatMessage.map((c,i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
        ))
      }
    </div>
    </div>

    <form  
        className='w-full p-2 ml-2 border border-black'
         onSubmit={(e) => {
            e.preventDefault();
            dispatch(
                addMessage({
                    name:"Pinnacle Coder",
                    message: liveMessage,
                })
            );
            setLiveMessage(""); 
         }}
         >

        <input  
        className="px-2 w-96"
        type="text"
        value={liveMessage}
        onChange={(e) =>{
             setLiveMessage(e.target.value)
        }}
        />
        <button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>
    </>
    );
};

export default LiveChat;
