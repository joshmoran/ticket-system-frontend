import CreateListItem from "./CreateListItem";

const ListItem = ( prop) => {
    console.log( prop  )
    return ( 
        <CreateListItem isComplete={prop.isCompleted} data={prop.data}/>
    )
}

export default ListItem;