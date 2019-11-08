import React from 'react';

import { connect } from 'react-redux';
import { addVision } from '../actions';
import '../Form.css';

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            id: null,
            completed: null
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const vision = {
            name: this.state.name,
            id: this.state.id,
            completed: this.state.completed
        }
        console.log("new vision", vision);
        this.props.addVision(vision);
        this.setState({name: ""})
    }
    render() {
        return (<div className="form">
            <h1>Add New Vision</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Vision</label>
                <input name="name" type="text" placeholder="Vision" value={this.state.name} onChange={this.handleChange} />
                <button type="submit"> Add to my vision board </button>
            </form>
        </div>)
    }

}


const mapStateToProps = state => {
    console.log(state.visions)
    return {
      visions: state.visions
    }
  }

  export default connect(mapStateToProps, { addVision })(Form);