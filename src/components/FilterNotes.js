import React from 'react';
import { connect } from 'react-redux';
import { setFilterText } from '../actions/Filter';

const FilterNotes = (props) => {
    return (
        <div>
            <input type="text"  className="form-control col-sm-4 float-right" onChange = { (e) =>{
                props.dispatch(setFilterText({text:e.target.value}));
            }}/>
            <br/>
        </div>
    );
}

export default connect ()(FilterNotes);