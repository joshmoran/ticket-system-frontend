import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { formatDate } from '../service/formatDate';
import { formatTime } from '../service/formatTime';

import TicketContext from '../context/TicketContext';
const CreateListItem = ( data ) => { 
    const { actions } = useContext(TicketContext);
    const navigate = useNavigate();
    const linked = "/tickets/" + data.data.id;

    const setIdentifer = () => { 
        actions.setKey( data.data.id );
        navigate(linked);
    }

    const checkClick = () => {
        document.location.href = linked;
        
    }

    let updatedTime = formatTime( data.data.update_date );
    let updatedDate = formatDate( data.data.update_date );

    let createdTime = formatTime( data.data.create_date );
    let createdDate = formatDate( data.data.create_date );

    return (
            <tr className="tableRow" onClick={setIdentifer} key={data.data.id}>

                    <td>{data.data.summary}</td>
                    <td>{data.data.priority}</td>
                    <td>{data.data.status}</td>
                    <td>{createdTime + ' ' + createdDate}</td>
                    <td>{updatedTime + ' ' + updatedDate}</td>
            </tr>
    )
}

export default CreateListItem;