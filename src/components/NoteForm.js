import React, {Component} from 'react';

class NoteForm extends Component{
    
    constructor(props){
        super(props);
        const {title, content} = props.note ? props.note : {};
        this.initialState = {
            title: title ? title : '',
            content: content ? content: ''
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
        this.props.onsubmitForm(this.state);
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
                {!this.props.note && <input 
                    type="button"
                    value="Add Note"
                    className="btn btn-primary" 
                    onClick={ () =>{
                        this.submitForm()
                        }}
                    />}
                 {this.props.note &&  <input 
                    type="button"
                    value="Update Note"
                    className="btn btn-primary" 
                    onClick={
                        () =>{
                        this.submitForm()
                        }
                    }
                    /> }
            </form>
        );  
    }
}

export default NoteForm;