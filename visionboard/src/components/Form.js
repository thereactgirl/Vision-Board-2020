import React, {useState} from 'react';

import { connect } from 'react-redux';
import  VisionActions from '../redux/visions/actions';

import '../Form.css';
import { visions } from '../data';

const Form = ({addVision}) =>  {
    const [name, setName] = useState('');
    // const [completed, setCompleted] = useState(false);

    const handleChange = (e) => {
       setName(e.target.value);
    }

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
        return (<div className="form">
            <h1>Add New Vision</h1>
            <form onSubmit={handleSubmit}>
                <label>Vision</label>
                <input name="name" type="text" placeholder="Vision" value={name} onChange={handleChange} />
                <button type="submit"> Add to my vision board </button>
            </form>
        </div>)
    

}


const mapStateToProps = state => {
    console.log(state.visions)
    return {
      visions: state.visions
    }
  }

const mapDispatchToProps =  {
    addVision: VisionActions.addVision
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);