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
    onSubmit = ()=> {
        // alert( tSummary );
    },
}) {
    const { actions } = useContext(TicketContext);


    const [ errors, setErrors ] = useState([]);
    const [ errorString, setErrorString ] = useState('');
    const [tSummary, setTSummery] = useState('');
    const [tPriority, setTPriority] = useState(priority || 'Low');
    const [tStatus, setTStatus] = useState(status || 'Created');

    let initialCount = 1;
    
    function validateForm  () {
    // tSummary.trim() === "" ||
        let hasError = false;
        setErrors( errors => []);
        
        setErrorString( errorString => []);
        console.log( errorString );
        let finalSummary = '';
        let finalPriority = '';
        let finalStatus = '';

        console.log( errors );
        // Check Summary String
        if ( tSummary == 'undefined' || tSummary == '') {
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

                console.log(sending)
            
                actions.createTicket( sending );

                setErrorString( [ 'Created a ticket'] ) ;
            } catch ( e) {
                setErrors( errors => [ ...errors, e])
                alert('Error occurred while processing form');
                return false;
            }
        } else { 
            {errors.map( error => {
                setErrorString( [...errorString,  <p>{error}</p> ]); 
            })}
        }
        console.log( {errorString} )
        // // setErrors( [] );
        // // if (tPriority === '') {
        // //     alert('Priority cannot be empty');
        // //     return false;
        // // }
        // // if (tStatus === '') {
        // //     alert('Status cannot be empty');
        // //     return false;
        // // }
        // return true;
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
            </>
        )
    }


    
    return (
        <div className="TicketForm">
            <div className="errorDiv">
                {errorString}
            </div>
            <div className="form">
                

                <label htmlFor="summary">Summary</label>
                <input type="text" name="summary" defaultValue={tSummary} onChange={(e) => setTSummery(e.target.value)} disabled={readonly} />
                
                <br />

                <label htmlFor="priority">Priority</label>
                <select name="priority" defaultValue={tPriority} onChange={(e) => setTPriority(e.target.value)} disabled={readonly}>
                    <option>Low</option>
                    <option>Moderate</option>
                    <option>High</option>
                </select>

                <br />

                <label htmlFor="status">Status</label>
                <select name="status" defaultValue={tStatus} onChange={(e) => setTStatus(e.target.value)} disabled={readonly}>
                    <option>Created</option>
                    <option>Rejected</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                </select>

                <br />

                <label htmlFor="createDate">Create Date</label>
                <input type="date" defaultValue={formatDate(create_date)} name="createDate" />

                {/* <br />

                <label htmlFor="updateDate">Update Date</label>
                <input type="date" defaultValue={formatDate(update_date)} name="updateDate"  /> */}

                <br />

                <button onClick={() => validateForm()} >Submit</button>
            </div>
        </div>
    )
}

export default TicketForm