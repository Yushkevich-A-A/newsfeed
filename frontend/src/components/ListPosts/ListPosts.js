import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post/Post';
import './ListPosts.css';

function ListPosts(props) {
    const { list } = props; 
    
    return (
        <div className='post-list'>
            { list.map( item => <Post key={item.id} item={item} /> ) }
        </div>
    )
}

ListPosts.propTypes = {
    list: PropTypes.array.isRequired,
}

export default ListPosts

