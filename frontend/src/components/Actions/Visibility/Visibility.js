import React from 'react';
import PropTypes from 'prop-types';
import './Visibility.css';
import { viewsDecoration } from '../../../functions/functions';

function Visibility(props) {
    const { count } = props;

    const countVisibality = viewsDecoration(count)

    return (
        <div className='visibility'>
            <span className='span-desc'>
                {countVisibality} 
            </span>
        </div>
    )
}

Visibility.propTypes = {
    count: PropTypes.number
};

export default Visibility;

