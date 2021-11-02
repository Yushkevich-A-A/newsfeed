export const serviceFetchInitRequest = () => {
    return { type: 'INIT_FETCH_REQUEST' };
}

export const serviceFetchRequest = (id) => {
    return { type: 'FETCH_REQUEST', payload: { id }};
}

export const serviceFetchError = (message) => {
    return { type: 'FETCH_ERROR', payload: { message } };
}

export const serviceFetchSuccess = (list) => {
    return { type: 'FETCH_SUCCESS', payload: { list } };
}