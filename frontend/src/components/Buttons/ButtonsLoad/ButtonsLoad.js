import React from 'react';
import PropTypes from 'prop-types';
import './ButtonsLoad.css';

function ButtonsLoad(props) {
    const { handleClick } = props;

    return (
        <div className='button-load' onClick={handleClick}>
            К предыдущим записям
        </div>
    )
}

ButtonsLoad.propTypes = {
    handleClick: PropTypes.func
};

export default ButtonsLoad;

