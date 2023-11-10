export default function  Logs({boardData}){
    return <ol id="log">
        {boardData.map((data)=>(<li key={`${data.square.row}${data.square.row}`}>
            {data.Player} selected , {data.square.row},{data.square.col}</li>))}
     </ol>
}