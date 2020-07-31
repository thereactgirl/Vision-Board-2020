import React, {useState} from 'react';

import { connect } from 'react-redux';
import  VisionActions from '../redux/visions/actions';
import  ModalActions from '../redux/modals/actions';

import Modal from '@material-ui/core/Modal';

import '../styles/Form.css';
import { visions } from '../data';

const Form = ({addVision, isAddVisionOpen, setAddVisionDialog}) =>  {
    const [name, setName] = useState('');
    // const [completed, setCompleted] = useState(false);

    const handleChange = (e) => {
       setName(e.target.value);
    }
    const handleClose = () => {
        setAddVisionDialog(false);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const vision = {
            name: name,
            user: 1   // todo add auth
        }
        console.log("new vision", vision);
        addVision(vision);
        setName('')
    }
        return (
        <Modal 
            open={isAddVisionOpen}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className="form">
                <h1>Add New Vision</h1>
                <form onSubmit={handleSubmit}>
                    <label>Vision</label>
                    <input name="name" type="text" placeholder="Vision" value={name} onChange={handleChange} />
                    <button type="submit"> Add to my vision board </button>
                </form>
            </div>
        </Modal>
        )
    

}


const mapStateToProps = state => {
    console.log(state.visions)
    return {
      isAddVisionOpen: state.modals.isAddVisionOpen
    }
  }

const mapDispatchToProps =  {
    addVision: VisionActions.addVision,
    setAddVisionDialog: ModalActions.setAddVisionDialog
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);