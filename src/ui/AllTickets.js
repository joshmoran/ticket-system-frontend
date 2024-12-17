import '../css/table.css';
import ListItem from "./ListItem";

const AllTickets = ( prop) => {
    return (
        <div className='content'>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Created Date</th>
                    <th>Updated Date</th>
                </tr>
                {
                    
                    prop.tickets.map((key) => {
                        return (
                            <ListItem
                                isCompleted={prop.isCompleted}
                                data={key}
                                key={key.id}
                            />
                            
                        )
                    })
                }
            </table>                  
        </div>

    )

}

export default AllTickets;