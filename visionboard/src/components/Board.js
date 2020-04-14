import React, { useState, useEffect } from 'react'
import Vision from '../components/Vision';
import { connect } from 'react-redux';
import VisionActions from '../redux/visions/actions';


const Board = ({ visions, getVisions }) => {

  useEffect(() => {
    getVisions()
  }, [])

  return (
    <div className="board">
      {visions && visions.map((v, i) => <Vision key={i} v={v} />)}
    </div>
  )

}

const mapStateToProps = state => {
  return {
    visions: state.visions.visions,
  }
}

const mapDispatchToProps = {
  getVisions: VisionActions.getVisions
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
