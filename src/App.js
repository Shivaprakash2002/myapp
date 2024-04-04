import React, { useState } from "react";
import Square from "./Square";


function Board() {
  const [player, setPlayer] = useState(null);
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  function startGame() {
    if (!player) {
      const players = ['X', 'O'];
      const randomPlayerIndex = Math.floor(Math.random() * players.length);
      setPlayer(players[randomPlayerIndex]);
    }
  }
  
  function handleClick(i) {
    if(calculatewinners(squares) || (squares[i])){
      return;
    } 
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    setSquares(nextSquares);

    setPlayer(player === 'X' ? 'O' : 'X');
  }
  const winner = calculatewinners(squares)
  console.log(winner);

return (
<>
  <button onClick={startGame} style={{ width: "100px", margin: "0 auto", display: "block" }}>
    Start Game
  </button>
  <span style={{ textAlign: 'center', display: 'block' }}>
    {player === null ? "Start the game" : `Player: ${player}'s turn`}
  </span>
  <div style={{ fontFamily: 'cursive', fontWeight: 'bold', textAlign: 'center' }}>
    {winner !== undefined ? `Winner : ${winner}` : ``}
  </div>
  <div style={{ display: "flex", justifyContent: "center" }} className="board-row">
    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
  </div>
  <div style={{ display: "flex", justifyContent: "center" }} className="board-row">
    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
  </div>
  <div style={{ display: "flex", justifyContent: "center" }} className="board-row">
    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
  </div>
</>
  );
}

function calculatewinners(squares){
  const winninglogic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < winninglogic.length; i++) {
    const [a, b, c] = winninglogic[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
}
export default Board;
