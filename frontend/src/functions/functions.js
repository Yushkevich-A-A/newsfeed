export const viewsDecoration = ( count ) => {
    if ( count < 1000 ) {
        return count;
    }
    return Math.floor(count / 1000) + 'K';
}