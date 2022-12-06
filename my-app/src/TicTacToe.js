import React from 'react';
import './TicTacToe.css';

function Square(props) {
    return (
        <button 
            className='square' 
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextPlayer: 'X',
            values: Array(9).fill(null),
        };
    }

    renderSquare(i, disabled) {
        return (
            <Square 
              value={this.state.values[i]}
              onClick={()=> this.handleClick(i)}
              disabled={disabled}
            />
        );
    }

    handleClick(i) {
        console.log('click')
        const updated = this.state.values.slice();
        updated[i] = this.state.nextPlayer;
        const state = this.checkGameState(updated);
        this.setState(state);
    }

    nextPlayerStatus() {
        return 'Next Player: ' + this.state.nextPlayer;
    }

    winnerStatus() {
        return 'Winner: ' + this.state.winner;
    }

    gameOverStatus() {
        return 'Game Over!';
    }

    checkGameState(values) {
        const winningPositionSets = [
            // rows
            [0,1,2], [3,4,5], [6,7,8],
            // columns
            [0,3,6], [1,4,7], [2,5,8],
            // diagonals
            [0,4,8], [2,4,6],
        ];
        for (const [a,b,c] of winningPositionSets) {
            if (values[a] && values[a] === values[b] && values[b] === values[c]) {
                return {winner: values[a], gameOver:true, values: values};
            }
        }

        const gameOver = !values.some(value => value == null);
        if (gameOver) {
            return {gameOver:gameOver, values: values};
        } else {
            return {
                nextPlayer: this.state.nextPlayer === 'X' ? 'O' : 'X',
                values: values
            };
        }
    }

    render() {
        let status;
        if (this.state.winner != null) 
            status = this.winnerStatus();
        else if (this.state.gameOver) 
            status = this.gameOverStatus();
        else {
            status = this.nextPlayerStatus();
        }

        const d = this.state.gameOver;
        return (
            <div>
                <div className='status'>{status}</div>
                <div className="board-row">
                    {this.renderSquare(0, d)}
                    {this.renderSquare(1, d)}
                    {this.renderSquare(2, d)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3, d)}
                    {this.renderSquare(4, d)}
                    {this.renderSquare(5, d)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6, d)}
                    {this.renderSquare(7, d)}
                    {this.renderSquare(8, d)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className='game'>
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{}</div>
                    <ol>{}</ol>
                </div>
            </div>
        )
    }
}

export default Game;
