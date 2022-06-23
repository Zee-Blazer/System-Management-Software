import React, { useContext } from 'react';

// Context
import { ApiRequest } from '../../Context/api-request.context'

// CSS
import './about-user.component.css'

export const AboutUserComponent = () => {

    const { data } = useContext(ApiRequest);

    return (
        <div className="main__container about__container"> 
            { data && 
                <div>
                    <div><p>Name: {data.name}</p></div>
                <hr/>
                <div><p>Mobile: { data.mobile }</p></div>
                <hr/>
                <div><p>E-mail: { data.email }</p></div>
                <hr/>
                <div><p>Address: { data.address }</p></div>
                </div>
            }
        </div>
    )
}
