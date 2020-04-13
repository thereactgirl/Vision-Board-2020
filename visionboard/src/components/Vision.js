import React, {useEffect} from "react";
import  VisionActions from '../redux/visions/actions';
import {connect} from 'react-redux';
import { visions } from "../data";



const Vision = ({ editVision, v, getVisions }) => {
   const toggle = (e) => {
        e.preventDefault();
        let vis = {
            id: v.id,
            name: v.name,
            completed: !v.completed
        }
        editVision(vis)
   }

   useEffect(()=> {
    getVisions()
   }, [v])

    return(
    <section onClick={toggle} 
    className={v.completed ? "completed" : ""}
    >
        {v.name}
        
    </section>
    ); 
}

const mapStateToProps = state => {
    return {
      visions: state.visions
    }
  }
  
  const mapDispatchToProps = {
      editVision: VisionActions.editVision,
      getVisions: VisionActions.getVisions
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Vision);