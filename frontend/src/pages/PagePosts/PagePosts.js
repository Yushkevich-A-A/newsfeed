import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListPosts from './../../components/ListPosts/ListPosts';
import ButtonsLoad from './../../components/Buttons/ButtonsLoad/ButtonsLoad'
import { serviceFetchInitRequest, serviceFetchRequest } from './../../reduxFold/action/actionCreators';
import './PagePosts.css';

function PagePosts(props) {
    const { error, lastId, items, fulllist } = useSelector( state => state.serviceFetchPosts )
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(serviceFetchInitRequest());
    }, []);

    useEffect(()=>{
        if (!error) {
            return;
        }
        
        setTimeout(() => {
            if (lastId) {
                dispatch(serviceFetchRequest(lastId))
            } else {
                dispatch(serviceFetchInitRequest());
            }
        }, 3 * 1000);
    }, [error])

    const handleClick = () => {
        dispatch(serviceFetchRequest(lastId));
    }
    
    return (
        <div className='page-post'>
            <ListPosts list={items} />
            {!fulllist && <ButtonsLoad handleClick={handleClick}/>}
        </div>
    )
}

export default PagePosts;

