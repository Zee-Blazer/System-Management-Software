import React, { useState, useEffect, useContext } from 'react';

// Navigation components
import { useNavigate } from 'react-router-dom';

// Firebase
import { onValue, ref, remove } from 'firebase/database';
import { DB } from '../../firebase';

// CSS
import './table.component.css';

// Context
import { ApiRequest } from '../../Context/api-request.context';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'

export const TableComponent = () => {

    const navigate = useNavigate();

    // Initilized API Request
    const { aboutUser, doEdit } = useContext(ApiRequest);

    const [data, setData] = useState();

    useEffect( () => {
        onValue(ref(DB, "Users"), (snapshot) => {
            const users = [];

            snapshot.forEach( childSnapshot => {
                users.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            } )

            setData(users);
        })
    }, [] )

    const deleteRecord = (id) => {
        remove(ref(DB, `Users/${id}`));
    }

    const viewAbout = (id) => {
        aboutUser(id);
        navigate('/about');
    }

    const factorEdit = (id) => {
        doEdit(id);
        navigate('/add');
    }

    return (
        <div>
            
            <table id="customers">
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>E-mail</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>

                { data ?  data.map( (item, i) => {

                    return (
                        <tr>
                            <td>{i+1}</td>
                            <td>{ item.name }</td>
                            <td>{ item.mobile }</td>
                            <td>{ item.email }</td>
                            <td>{ item.address }</td>
                            <td> 
                                <div className='icons'>
                                    <FontAwesomeIcon 
                                        icon={faPencil} 
                                        className="icon pencil" 
                                        onClick={ () => factorEdit(item.id) }
                                    />
                                    <FontAwesomeIcon 
                                        icon={faTrash} 
                                        onClick={ () => deleteRecord(item.id) } 
                                        className="icon trash" 
                                    />
                                    <FontAwesomeIcon 
                                        icon={faEye} 
                                        className="icon eye" 
                                        onClick={ () => viewAbout(item.id) }
                                    />
                                </div>    
                             </td>
                        </tr>
                    )
                } ) : <p style={{ textAlign: 'center' }}>Loading...</p> }
            </table>

        </div>
    )
}
