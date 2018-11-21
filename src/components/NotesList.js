import React from 'react';
import { connect } from 'react-redux';
import getFilteredNotes from '../selectors/FilterSelector';
import {removeNote} from '../actions/Notes';
import { setFilterText }  from '../actions/Filter';
import FilterNotes from './FilterNotes';

const NotesList = (props) =>{
        return (
            <div>
            <br />
            <h3> Notes List </h3>
            <br />
            <FilterNotes />
            <br />
            <table className = "table table-striped table-bordered table-sm"  width="100%">
                <TableHeader sortTableDataBy = { (type)=> {
                    props.dispatch(setFilterText({sortBy:type}))
                    }}/>
                <TableBody 
                notes = { props.notes }
                deleteNote = { (id) => {
                    props.dispatch(removeNote(id));
                }}
                editNote = {(id) => {
                    props.history.push(`/edit/${id}`);

                }}
                 />
            </table>
            </div>
        );   
}

const TableBody = (props) => {
     const rows = props.notes.map((row,index) => {
         return(
             <tr key = {index} >
             <td>{index+1}</td>
                <td>{row.title}</td>
                 <td>{row.content}</td>
                 <td>{ new Date(row.createdAt).toLocaleString()}</td>
                 <td>{new Date(row.updatedAt).toLocaleString()}</td>
                 <td><button className="btn btn-primary" onClick={() => props.editNote(row.id)}>Edit</button></td>
                 <td><button className="btn btn-secondary" onClick={() => props.deleteNote(row.id)}>Delete</button></td>
             </tr>
         );
     });
        return(
        <tbody>{ rows }</tbody>
        );
}

const TableHeader = (props) => {
    return (
         <thead>
            <tr>
                <th>S.NO</th>
                <th onClick = { () => {
                    props.sortTableDataBy('title');
                    }} >Title </th>
                <th onClick = { () => {
                    props.sortTableDataBy('content');
                    }} >Content </th>
                <th onClick = { () => {
                    props.sortTableDataBy('createdAt');
                    }} >Created Date </th>
                <th onClick = { () => {
                    props.sortTableDataBy('updatedAt');
                    }} >Updated Date </th>
                <th>Edit</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}


const mapStateToProps =  (state) => {
    return {
        notes: getFilteredNotes(state.notes, state.filters)
    }
};

export default connect(mapStateToProps)(NotesList);