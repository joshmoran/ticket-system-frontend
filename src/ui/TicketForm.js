import React, { useEffect, useState, useContext } from 'react'
import { formatDate } from '../util/dateUtil';

import TicketContext from "../context/TicketContext";

import '../css/createTicket.css';

function TicketForm({
    id = '',
    summary,
    priority,
    status,
    create_date = new Date(),
    update_date = new Date(),
    readonly = false,
}) {
    const { actions } = useContext(TicketContext);

    const [ errors, setErrors ] = useState([]);
    const [ errorString, setErrorString ] = useState('');

    const [tSummary, setTSummery] = useState('');
    const [tPriority, setTPriority] = useState(priority || 'Low');
    const [tStatus, setTStatus] = useState(status || 'Created');
    
    function validateForm  () {
        let hasError = false;
        setErrors( errors => [] );         
        setErrorString( '' );

        let finalSummary = '';
        let finalPriority = '';
        let finalStatus = '';

        // Check Summary String
        if ( tSummary === 'undefined' || tSummary === '') {
            setErrors( errors => [ ...errors, "Name must not be empty" ]);
            hasError = true;
        } else {
            finalSummary =  tSummary;
            finalPriority = tPriority;
            finalStatus = tStatus;
        }

        if ( !hasError ) {
            try { 
                let sending = {
                    summary : finalSummary ,
                    priority : finalPriority,
                    status : finalStatus,
                };
            
                actions.createTicket( sending );

                setErrorString( [ 'Created a ticket'] ) ;
            } catch ( e) {
                setErrors( errors => [ ...errors, e])
                alert('Error occurred while processing form');
                return false;
            }
        } else { 
            {errors.map( error => {
                setErrorString( [ <p>{error}</p> ]); 
            })}
        }
    }

    useEffect( () => {
        validateForm();
        WriteErrors();
    }, []);

    const WriteErrors = () => {
        return (
            <>
                {errors.map( string => {
                    return (
                        <p>string</p>
                    )
                })}
                setErrors(  [] );
            </>
        )
    }


    
    return (
        <div className="TicketForm">
            <div className="errorDiv">
                {errorString}
            </div>
            <div id="form">
                <div className="form">
                    <div class="formLeft flex column">

                    <label htmlFor="summary">Summary</label>
                    <label htmlFor="priority">Priority</label>
                    <label htmlFor="createDate">Create Date</label>
                    <label htmlFor="status">Status</label>
                    </div>
                    <div class="formRight flex column">

                    <input type="text" name="summary" defaultValue={tSummary} onChange={(e) => setTSummery(e.target.value)} disabled={readonly} />
                    
                    <select name="priority" defaultValue={tPriority} onChange={(e) => setTPriority(e.target.value)} disabled={readonly}>
                        <option>Low</option>
                        <option>Moderate</option>
                        <option>High</option>
                    </select>
                    <select name="status" defaultValue={tStatus} onChange={(e) => setTStatus(e.target.value)} disabled={readonly}>
                        <option>Created</option>
                        <option>Rejected</option>
                        <option>In Progress</option>
                        <option>Resolved</option>
                    </select>
                    <input type="date" defaultValue={formatDate(create_date)} name="createDate" />
                    </div>
                </div>
                <button onClick={() => validateForm()} >Submit</button>
            </div>
        </div>
    )
}

export default TicketForm