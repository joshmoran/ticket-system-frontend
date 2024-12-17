import CreateListItem from "./CreateListItem";

const ListItem = ( prop) => {
    return ( 
        <CreateListItem isComplete={prop.isCompleted} data={prop.data}/>
    )
}

export default ListItem;