import React from "react";
import { useState } from "react"

interface SendMessageProps {
  onSendMessage: (message: string) => void;
}

const Inputbox: React.FC<SendMessageProps> = ({onSendMessage}) => {
    const [ input,setInput ] = useState("")
 
const handleSendMessage = () => {
  if (input.trim() !== ""){
    onSendMessage(input)
    setInput("")
  }
}

const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) =>{
  if (event.key === "Enter"){
    handleSendMessage()
  }
}
return(
<div className="container mx-[214px] bg-slate-50 h-12 rounded-b-2xl w-2/3">
     <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Text Anything.."
      className="w-[92%] h-9 p-4  bg-slate-50 border-[1px] border-blue-300"/>
     
     <button
      type="button" 
      onClick={handleSendMessage}
      className="bg-blue-800  rounded-sm text-slate-50 font-medium py-2 px-3 ">
        Send
        
       
      </button>
     
    </div>
)
}

export default Inputbox