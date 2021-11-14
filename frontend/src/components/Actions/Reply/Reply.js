import React from 'react';
import PropTypes from 'prop-types';
import './Reply.css';

function Reply(props) {
    const { count } = props;

    return (
        <div className='reply'>
            <span className='span-desc'>
                {!!count && count}
            </span>
        </div>
    )
}

Reply.propTypes = {
    count: PropTypes.number
};

export default Reply;

