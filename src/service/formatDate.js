export const formatDate = ( timestamp ) => { 
    const newDate = timestamp.split("T");

    return newDate[0];
}

