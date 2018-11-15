import React, {Component} from 'react';

class AddNoteForm extends Component{

    constructor(props){
        super(props);
        this.initialState = {
            title: '',
            content: ''
        }
        this.state = this.initialState;
    }

    handleChange = event => {
        const {name , value} =  event.target;
        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render(){
        return(
            <form className="form">
                <label>Note</label>
                <input 
                    type="text"
                    name="title"
                    className="form-control col-sm-5"
                    value = {this.state.title}
                    onChange = {this.handleChange} />
                <label>Content</label>
                <input 
                    type="text"
                    name="content"
                    value = {this.state.content}
                    className="form-control col-sm-5"
                    onChange={this.handleChange} />
                    <br/>
                <input 
                    type="button"
                    value="Submit"
                    className="btn btn-primary" 
                    onClick={this.submitForm}
                    />
            </form>
        );  
    }
}

export default AddNoteForm;