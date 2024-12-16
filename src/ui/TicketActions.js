
function ticketActions () {
    return ( 
        <div className="actions">
            {/*  */}
            {/* SORT BY NAME */}
            {/*  */}
            <button className="btnAction" onClick={() => {
            if ( sortName == 'asc' || sortName == '') {
                setSortName('desc');
            } else { 
                setSortName('asc');
            }
            sortByName( sortName );
            }}>Sort By Name <br /> <span>{writeName( sortName )}</span></button>
            {/*  */}
            {/* SORT BY PRIORITY */}
            {/*  */}
            <button className="btnAction" onClick={() => {
            if ( sortPriority == 'asc' || sortPriority == '') {
                setSortPriority('desc');
            } else { 
                setSortPriority('asc');
            }
            sortByPriority( sortPriority );
            }}>Sort By Priority <br /> <span>{writePriority( sortPriority )}</span></button>
            {/*  */}
            {/* SORT BY  */}
            {/*  */}
            <button className="btnAction" onClick={() => {
            if ( sortStatus == 'asc' || sortStatus == '') {
                setSortStatus('desc');
            } else { 
                setSortStatus('asc');
            }
            sortByStatus( sortStatus );
            }}>Sort By Status <br /> <span>{writeStatus( sortStatus )}</span></button>
        </div>

    )
}
    
                    