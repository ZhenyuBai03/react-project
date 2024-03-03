import React, { useEffect, useState } from 'react';

function Square({value, onClick}) {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [xIsNext, setXIsNext] = useState(true);
    const [status, setStatus] = useState('');

    function getWinner(squares) {
        const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        ];

        for (let i = 0; i < winningPatterns.length; i++) {
        const [x, y, z] = winningPatterns[i];

        if (
            squares[x] &&
            squares[x] === squares[y] &&
            squares[x] === squares[z]
        ) {
            return squares[x];
        }
        }

        return null;
    }

    function handleClick(i) {
        const boardCopy = [...board];
        if (getWinner(board) || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setXIsNext(!xIsNext);
        setBoard(boardCopy);
    }

    function restartGame() {
        setBoard(Array(9).fill(''));
        setXIsNext(true);
        setStatus('');
    }

    useEffect(() => {
        if (!getWinner(board) && board.every((item) => item !== '')) {
            setStatus('This is a Draw!🥵');
        } else if (getWinner(board)) {
            setStatus(`Winner is ${getWinner(board)}🥳!`);
        } else {
            setStatus('The next player is ' + (xIsNext ? 'X' : 'O') + '!');
        }
    }, [board, xIsNext]);

    return (
        <div className="TicTacToe-Container">
            <h3>TicTacToe</h3>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={board[0]} onClick={() => handleClick(0)} />
                <Square value={board[1]} onClick={() => handleClick(1)} />
                <Square value={board[2]} onClick={() => handleClick(2)} />
            </div>                                 
            <div className="board-row">            
                <Square value={board[3]} onClick={() => handleClick(3)} />
                <Square value={board[4]} onClick={() => handleClick(4)} />
                <Square value={board[5]} onClick={() => handleClick(5)} />
            </div>                                 
            <div className="board-row">            
                <Square value={board[6]} onClick={() => handleClick(6)} />
                <Square value={board[7]} onClick={() => handleClick(7)} />
                <Square value={board[8]} onClick={() => handleClick(8)} />
            </div>
            <button onClick={restartGame}>Restart</button>
        </div>
    );

}