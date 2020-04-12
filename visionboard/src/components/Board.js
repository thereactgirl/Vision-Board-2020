import React, {useState, useEffect} from 'react'
import Vision from '../components/Vision';
import { connect } from 'react-redux';
import  VisionActions from '../redux/visions/actions';


const Board = ({ visions, getVisions }) => {
  const [newVision, setNewVision] = useState('');

  useEffect(() => {
    getVisions()
  }, [])
  
  const  toggle = (id) => {
          visions.map(v => {
              if (id === v.id){
                return {...v, completed: !v.completed};
              } else {
                return v;
              }
            })
    };

   
        return(   
             <div  className="board">
               {visions && visions.map((v, i) => <Vision key={i} v={v} toggle={toggle} />)}
             </div>
            )

}

const mapStateToProps = state => {
  return {
    visions: state.visions
  }
}

const mapDispatchToProps = {
    getVisions: VisionActions.getVisions
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
