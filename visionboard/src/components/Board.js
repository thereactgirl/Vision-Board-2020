import React from 'react'
import Vision from '../components/Vision';
import {visions} from '../data';


class Board extends React.Component {
    constructor(){
        super();
        this.state = {visions}
    }
    toggle = (id) => {
        this.setState({
            visions: this.state.visions.map(v => {
                console.log(id,v.completed)
              if (id === v.id){
                return {...v, completed: !v.completed};
              } else {
                return v;
              }
            })
          });
        }
    
    render() {
        return(   
            <>
             <header  className="board">
               {this.state.visions.map((v, i) => <Vision key={i} v={v} toggle={this.toggle} />)}
    
             </header>
            </>)
    } 
}

export default Board;