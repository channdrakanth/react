import React, {Component} from 'react';

class Table extends Component{
    
    render(){
        return (
            <table className = "table">
                <TableHeader/>
                <TableBody 
                charactersData =  { this.props.charactersData }
                removeCharacter = { this.props.removeCharacter}
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
                 <td><button className="btn btn-primary" onClick={() => props.removeCharacter(index)}>Edit</button></td>
                 <td><button className="btn btn-secondary" onClick={() => props.removeCharacter(index)}>Delete</button></td>
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

export default Table;