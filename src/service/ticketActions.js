
export const writePriority = ( sortPriority ) => {
    if ( sortPriority == 'desc' ) {
        return 'HIGH to LOW';
    } else if ( sortPriority == 'asc' ) {
        return 'LOW to HIGH';
    }
}

export const writeStatus = ( sortStatus ) => {
    if ( sortStatus == 'asc' ){
        return 'IN PROGRESS to CREATED';
    } else {
        return 'CREATED to IN PROGRESS';
    }
}

export const writeName = ( sortName ) => {    
    if ( sortName == 'asc' ) {
        return 'Z to A';
    } else if ( sortName == 'desc' ) {
        return 'A to Z';
    }
}

export const writeDate = ( sortName ) => {
    if ( sortName == 'asc' ) {
        return 'New to Old';
    } else {
        return 'Old to New';
    }
}