import React from 'react'
import Vision from '../components/Vision';
import {visions} from '../data';


class Board extends React.Component {
    constructor(){
        super();
        this.state = {
          visions: [...visions],
          newVision: ""
          
        }
    }
    toggle = (id) => {
        this.setState({
            visions: this.state.visions.map(v => {
              if (id === v.id){
                return {...v, completed: !v.completed};
              } else {
                return v;
              }
            })
        });
    };

   
    render() {
        return(   
            <>
             <div  className="board">
               {this.state.visions.map((v, i) => <Vision key={i} v={v} toggle={this.toggle} />)}
    
             </div>
            </>)
    } 
}

export default Board;
