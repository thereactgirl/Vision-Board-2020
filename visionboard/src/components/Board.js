import React from 'react'
import Vision from '../components/Vision';
import {visions} from '../data';


class Board extends React.Component {
    constructor(){
        super();
        this.state = {visions}
    }

    toggleDone() {
        console.log("clicked")
    }
    render() {
        return(   
            <>
             <header  className="board">
               {this.state.visions.map((v, i) => <Vision key={i} v={v}/>)}
    
             </header>
</>)
    } 
}

export default Board;