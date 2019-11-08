import React from 'react';

import { connect } from 'react-redux';
import { addVision } from '../actions';
import '../Form.css';

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            vision: ""
        };
    }

    handleChange = (e) => {
        this.setState({
            vision : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted", this.state.vision);
        console.log(this.props.visions)
        this.props.addVision(this.state.vision);
        this.setState({newVision: ""})
    }
    render() {
        return (<div className="form">
            <h1>Add New Vision</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Vision</label>
                <input name="vision" type="text" placeholder="Vision" value={this.state.newVision} onChange={this.handleChange} />
                <button type="submit"> Add to my vision board </button>
            </form>
        </div>)
    }

}


const mapStateToProps = state => {
    return {
      visions: state.visions
    }
  }

  export default connect(mapStateToProps, { addVision })(Form);