export default function GameOver({winner,restartMatch}){
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && <h2>You Won, {winner}</h2>}
            {!winner && <h2>It's a draw</h2>}
            <button onClick={restartMatch}>Rematch</button>
        </div>
    )
}