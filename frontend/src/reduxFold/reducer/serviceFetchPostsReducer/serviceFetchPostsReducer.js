const initState = {
    items: [],
    loading: false,
    error: null,
    fulllist: false,
    lastId: null,
}

const serviceFetchPostsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INIT_FETCH_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_ERROR':
            const { message } = action.payload;
            return { ...state, loading: false, error: message };
        case 'FETCH_SUCCESS':
            const { list } = action.payload;
            const lastId = ( list.length === 0 ) ? state.lastId : list[list.length - 1].id;
            if ( list.length < 5 ) {
                return { ...state, 
                    items: [ ...state.items, ...list ], 
                    lastId: lastId, 
                    fulllist: true, 
                    loading: false, 
                    error: null };
            }
            return { ...state, 
                    items: [ ...state.items, ...list ], 
                    lastId: lastId, 
                    loading: false, 
                    error: null };
            // return { ...state };
        default: 
            return { ...state };
    }
}

export default serviceFetchPostsReducer;