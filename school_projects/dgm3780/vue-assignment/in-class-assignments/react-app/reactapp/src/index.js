import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function isWinner(squares){
    const possibleLines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ];
    for (let i = 0; i < possibleLines.length; i++) {
        const [a, b, c] = possibleLines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function isDraw(squares){
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === null) return false;
    }
    return true;
}

function Square({value, onClick}){

    useEffect(() => {
        console.log("render");
        return () => {
            console.log('unmount');
        }
    }, []);

    return (
        <button className="square" onClick={onClick}>
            { value }
        </button>
    )
}

function useFetch(url) {

    const [data, setData] = useState({data: null, loading: true});

    useEffect(() => {
        fetch(url).then(x => x.text().then(y => {
            console.log(y);
            setData({data: y, loading: false});
        }));
    })
}

function Game(){

    //STATE is immutable, cannot change original state
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    useEffect(() => {
        console.log("rendered");
    },[isXNext]);

    const winner = isWinner(squares);
    const draw = isDraw(squares);

    // useFetch('http://numbersapi.com/42');

    function renderSquare(index){
        return (
            <Square value={squares[index]} onClick={function(){
                //copies array

                if (squares[index]) return;

                const nextSquares = squares.slice();
                nextSquares[index] = isXNext ? "X" : "O";
                setSquares(nextSquares);
                setIsXNext(!isXNext);
            }} />
        )
    }

    function reset() {
        setSquares(Array(9).fill(''));
    }

    function getStatus(winner, full){
        if (winner){
            return winner + " Wins! Congrats!"
        }
        if(full) {
            return "Draw!";
        }
        return isXNext ? "O's turn" : "X's turn";
    }

    console.log(getStatus(winner, draw));

    return (
        <div className="container">
            <div className="game">
                <div className="game-board">
                    <div className="board-row">
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>
                </div>
                <div>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<Game />,document.getElementById('root'));
