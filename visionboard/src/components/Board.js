import React from 'react'
import Vision from '../components/Vision';
import { connect } from 'react-redux';


class Board extends React.Component {
    constructor(){
        super();
        this.state = {
          newVision: ""    
        }
    }
    
    toggle = (id) => {
        this.setState({
            visions: this.props.visions.map(v => {
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
               {this.props.visions.map((v, i) => <Vision key={i} v={v} toggle={this.toggle} />)}
    
             </div>
            </>)
    } 
}

const mapStateToProps = state => {
  return {
    visions: state.visions
  }
}

export default connect(mapStateToProps, {  })(Board);
