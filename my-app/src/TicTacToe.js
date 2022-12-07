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
    renderSquare(i, disabled) {
        return (
            <Square 
              value={this.props.values[i]}
              onClick={()=> this.props.onClick(i)}
              disabled={disabled}
            />
        );
    }

    nextPlayerStatus() {
        return 'Next Player: ' + this.props.nextPlayer;
    }

    winnerStatus() {
        return 'Winner: ' + this.props.winner;
    }

    gameOverStatus() {
        return 'Game Over!';
    }

    render() {
        let status;
        if (this.props.winner != null) 
            status = this.winnerStatus();
        else if (this.props.gameOver) 
            status = this.gameOverStatus();
        else {
            status = this.nextPlayerStatus();
        }

        const d = this.props.gameOver;
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
    constructor(props) {
        super(props);
        this.state = {
            history: [{values: Array(9).fill(null), nextPlayer: 'X' }],
            step: 0,
        };
    }

    handleClick(i) {
        console.log('click')
        const history = this.state.history.slice(0, this.state.step + 1);
        const len = history.length;
        const currentState = history[len-1];
        if (currentState.values[i]) {
            // is already set
            return;
        }
        const updated = currentState.values.slice();
        updated[i] = currentState.nextPlayer;
        const state = this.checkGameState(updated, currentState.nextPlayer);
        this.setState({
            history: history.concat(state),
            step: this.state.step + 1,
        });
    }

    checkGameState(values, nextPlayer) {
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
                nextPlayer: nextPlayer === 'X' ? 'O' : 'X',
                values: values
            };
        }
    }

    jumpTo(move) {
        this.setState({
            step: move,
        })
    }

    render() {
        const history = this.state.history;
        const currentState = history[this.state.step];
        const moves = history.map((step,move) => {
            const desc = move ? "go to move #" + move : "go to game start"
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })
        
        return (
            <div className='game'>
                <div className="game-board">
                    <Board 
                     values={currentState.values}
                     nextPlayer={currentState.nextPlayer}
                     winner={currentState.winner}
                     gameOver={currentState.gameOver}
                     onClick={(i)=>this.handleClick(i)}
                      />
                </div>
                <div className="game-info">
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;
