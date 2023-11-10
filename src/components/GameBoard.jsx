export default function GameBoard({boardData,selectSquare}){

    // const [gameBoard,setGameBoard]=useState(initialBoard)

    // function handleSelectSquare(row,col){
    //     setGameBoard((prevboard)=>{
    //         const newBoard=[...prevboard.map((innerArray)=>[...innerArray])]
    //         console.log(activePlayerSymbol)
    //         newBoard[row][col]=activePlayerSymbol
    //         console.log(newBoard)
    //         return newBoard
    //     })
    //     selectSquare()
    // }
    return (
        <ol id="game-board">
            {boardData.map((row,rowIndex)=><li key={rowIndex}>
                <ol>
                        {row.map((playerSymbol,colIndex)=><li key={colIndex}><button onClick={()=>selectSquare(rowIndex
                            ,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )

}