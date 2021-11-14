import React from 'react';
import PropTypes from 'prop-types';
import './Like.css';

function Like(props) {
    const { count } = props;

    return (
        <div className='like'>
            <span className='span-desc'>
                {!!count && count}
            </span>
        </div>
    )
}

Like.propTypes = {
    count: PropTypes.number
};

export default Like;

