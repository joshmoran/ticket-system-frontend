export const formatTime = ( timestamp ) => {
    let time = timestamp.split('T');
    const timeEl = time[1].split('.')[0];

    return timeEl;
}