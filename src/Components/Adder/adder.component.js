import React, { useState, useContext, useEffect } from 'react';

// Navigator
import { useNavigate } from 'react-router-dom';

// Context
import { ApiRequest } from '../../Context/api-request.context';

// Firebase
import { push, ref } from 'firebase/database';
import { DB } from '../../firebase';

// CSS
import './adder.component.css';

export const AdderComponent = () => {

    const { editInfo, info, Id } = useContext(ApiRequest);

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const onAddUser = (e) => {
        e.preventDefault();

        if(info) {
            editInfo(Id, email, mobile, address, name);
            navigate('/');
        }
        else{
            push(ref(DB, 'Users'), {name, mobile, email, address})
            navigate('/');
        }
    }

    useEffect( () => {
        if(info)
        {
            setName(info.name);
            setAddress(info.address);
            setEmail(info.email);
            setMobile(info.mobile);
        }
    }, [] )

    return(
        <div className="main__container add__container">
            <h2>Add A User To The System</h2>

            <form onSubmit={ onAddUser }>
                <div>
                    <input 
                        type="text" 
                        placeholder='Name (eg James)' 
                        className='input__adder' 
                        value={ name }
                        onChange={ e => setName(e.target.value) }
                    />
                </div>

                <div>
                    <input 
                        type="text"  
                        placeholder='Mobile (eg 0916273382)' 
                        className='input__adder' 
                        value={ mobile }
                        onChange={ e => setMobile(e.target.value) }
                    />
                </div>

                <div>
                    <input 
                        type="text" 
                        placeholder='E-mail (eg jamesboss@gmail.com)' 
                        className='input__adder' 
                        value={ email }
                        onChange={ e => setEmail(e.target.value) }
                    />
                </div>

                <div>
                    <input 
                        type="text" 
                        placeholder='Address (eg Villa Estate)' 
                        className='input__adder' 
                        value={ address }
                        onChange={ e => setAddress(e.target.value) }
                    />
                </div>


                <button 
                    className='adder__btn'
                    onClick={ onAddUser }
                >Add User</button>
                
            </form>

            <p style={{ textAlign: 'center' }}>You can a preferred user of your choice</p>
        </div>
    )
}
