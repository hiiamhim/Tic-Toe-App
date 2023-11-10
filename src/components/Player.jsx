import { useState } from "react"

export default function Player({name,symbol,isActive,onNameChange}){
   
    const [isEditing,setEdit]=useState(false)
    const [playerName,setPlayerName]=useState(name)


    function handleNameChange(event){
        setPlayerName(event.target.value)
    }


    let editableplayerName= <span className="player-name">{playerName}</span>

    if(isEditing){
        editableplayerName=<input type="text" value={playerName} onChange={handleNameChange} required/>
    }
    function handleEdit(){
        setEdit((prevstate)=>!prevstate)
        if(isEditing){
             onNameChange(symbol,playerName)
        }
       

        
    }

  

return (
    <li className={isActive ? "active":undefined}>
    <span className="player">
      {editableplayerName}
    <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEdit}>{isEditing?"Save":"Edit"}</button>
  </li>
)
}