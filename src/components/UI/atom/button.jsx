import React from 'react'
import './button.css'
import PropTypes, {any} from 'prop-types';

export const Button = ({btnText, btnVariant, onClick, btnIcon}) => {
    return ( <button className={btnVariant} onClick = {onClick} >
      {btnIcon}
      {btnText}
    </button>)
  };
  
Button.propTypes = {
    btnText: PropTypes.string,
    btnVariant: PropTypes.oneOf(['default']),
    btnIcon: any,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    btnText: null,
    btnVariant: 'custom-button',
    onClick: undefined,
    btnIcon: null,
};


export default Button