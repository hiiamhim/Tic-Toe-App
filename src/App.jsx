import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Logs from "./components/Logs"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver"

const initialBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function curActivePlayer(gameboard){
  let currPlayer='X'

  if(gameboard[0]?.Player=="X" && gameboard.length>0){
    currPlayer="O"
  }

  return currPlayer

}

function App() {

   const [gameTurn,setGameTurn]=useState([])
   const [player,setPlayer]=useState({
    X:"Player 1",
    Y:"Player 2"
   })
  // const [activePlayer,setActivePlayer]=useState('X')
   const activePlayer=curActivePlayer(gameTurn)

  function handleSelectSquare(row,col){
    // setActivePlayer((curActivePlayer)=>curActivePlayer=="X"?"O":"X")
    setGameTurn((prevTurn)=>{
     const currPlayer=curActivePlayer(prevTurn)
      const newTurn=[{square:{row:row,col:col},Player:currPlayer},...prevTurn]
      return newTurn
    })

  }

  let gameBoard=[...initialBoard.map((innerArray)=>[...innerArray])]
    for(const data of gameTurn){       
        const {square,Player}=data
        const {row,col}=square
        gameBoard[row][col]=Player
    }

    let winner;
    const hasdraw=gameTurn.length===9 && !winner


    for(const combination of WINNING_COMBINATIONS){
      let firstSymbol=gameBoard[combination[0].row][combination[0].column]
      let secondSymbol=gameBoard[combination[1].row][combination[1].column]
      let thirdSymbol=gameBoard[combination[2].row][combination[2].column]

      
      if(firstSymbol  && firstSymbol===secondSymbol && secondSymbol===thirdSymbol){
        winner=player[firstSymbol]
      }

    }

    function handPlayerNameChange(symbol,newname){
      setPlayer((prevstate)=>{
        return {
          ...prevstate,
          [symbol]:newname
        }
      })
    }

   
    

  return (
   <main>
    <div id="game-container">
     <ol id="players" className="highlight-player">
     <Player name="Player 1" symbol="X"  onNameChange={handPlayerNameChange} isActive={activePlayer==="X"}/>
     <Player name="Player 2" symbol="O" onNameChange={handPlayerNameChange}  isActive={activePlayer==="O"}/>
     </ol>
     {(winner || hasdraw) && <GameOver winner={winner}  restartMatch={()=>setGameTurn([])}/>}
     <GameBoard  selectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} boardData={gameBoard}/>
    </div>
    <Logs boardData={gameTurn}/>
   </main>
  )
}

export default App
