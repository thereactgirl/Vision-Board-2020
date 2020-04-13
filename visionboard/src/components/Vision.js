import React, { useEffect } from "react";
import VisionActions from '../redux/visions/actions';
import { connect } from 'react-redux';

import { IconButton, Icon } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

const Vision = ({ editVision, v, getVisions, deleteVision }) => {
    const toggle = (e) => {
        e.preventDefault();
        let vis = {
            id: v.id,
            name: v.name,
            completed: !v.completed
        }
        editVision(vis)
    }


    return (
        <div>
            <IconButton onClick={() => deleteVision(v)}>
                <DeleteIcon color='primary' />
            </IconButton>
            <section onClick={toggle}
                className={v.completed ? "completed" : ""}
            >
                {v.name}

            </section>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        visions: state.visions
    }
}

const mapDispatchToProps = {
    editVision: VisionActions.editVision,
    getVisions: VisionActions.getVisions,
    deleteVision: VisionActions.deleteVision
}

export default connect(mapStateToProps, mapDispatchToProps)(Vision);