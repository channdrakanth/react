import React, {Component} from 'react';

class NotesList extends Component{
    
    render(){
        return (
            <table className = "table">
                <TableHeader/>
                <TableBody 
                charactersData =  { this.props.charactersData }
                removeCharacter = { this.props.removeCharacter}
                editCharacter = { this.props.editCharacter }
                 />
            </table>
        );
    }
}

const TableBody = (props) => {
     const rows = props.charactersData.map((row,index) => {
         return(
             <tr key = {index} >
             <td>{index+1}</td>
                <td>{row.title}</td>
                 <td>{row.content}</td>
                 <td>{ new Date(row.createdAt).toLocaleString()}</td>
                 <td>{new Date(row.updatedAt).toLocaleString()}</td>
                 <td><button className="btn btn-primary" onClick={() => props.editCharacter(row)}>Edit</button></td>
                 <td><button className="btn btn-secondary" onClick={() => props.removeCharacter(row.id)}>Delete</button></td>
             </tr>
         );
     });
        return(
        <tbody>{ rows }</tbody>
        );
}

const TableHeader = () => {
    return (
         <thead>
            <tr>
                <th>S.NO</th>
                <th>Title</th>
                <th>Content</th>
                <th>Created Date</th>
                <th>Updated Date</th>
                <th>Edit</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

export default NotesList;