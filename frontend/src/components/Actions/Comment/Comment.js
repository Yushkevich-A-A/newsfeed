import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

function Comment(props) {
    const { count } = props;

    return (
        <div className='comment'>
            <span className='span-desc'>
                {!!count && count}
            </span>
        </div>
    )
}

Comment.propTypes = {
    count: PropTypes.number
};

export default Comment;

