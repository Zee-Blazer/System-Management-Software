import React, { createContext, useState } from 'react';

// Firebase initializes fro the file
import { onValue, ref, update } from 'firebase/database';
import { DB } from '../firebase';

export const ApiRequest = createContext();

export const ApiRequestProvider = ({ children }) => {

    const [data, setData] = useState();
    const [info, setInfo] = useState();
    const [Id, setId] = useState();

    const aboutUser = (id) => {
        onValue(ref(DB, `Users/${id}`), (snapshot) => {
            
            setData(snapshot.val());

        })
    }

    const editInfo = (id, email, mobile, address, name) => {
        update(ref(DB, `Users/${id}`), { email, mobile, address, name })
        setInfo();
        setId();
    }

    const doEdit = (id) => {
        setId(id);
        onValue(ref(DB, `Users/${id}`), (snapshot) => setInfo(snapshot.val()) )
    }

    return (
        <ApiRequest.Provider value={{ aboutUser, data, doEdit, info, Id, editInfo }} >
            { children }
        </ApiRequest.Provider>
    )
}
