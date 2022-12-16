import React, {useState} from "react";

function StatusPicker(){
  const [status, setStatus] = useState('Active')
  
  return <div>
    <h2>{status}</h2>
    
    <button onClick={()=>{
      setStatus('Active')
    }}>Active</button>
    <button onClick={()=>{
      setStatus('Away')
    }}>Away</button>
    <button onClick={()=>{
      setStatus('Offline')
    }}>Offline</button>
  </div>
}
export default StatusPicker
  
  