import React, {Component} from 'react'
import Square from '../components/Square'

export default class Board extends Component {
    renderSquare(i: number){
        return (
            <Square
                value={i}
                onClick={()=>onclick}
            />
        )
    }

    render(): React.ReactNode {
        return (
            <div>
                <div>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}