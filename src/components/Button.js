import React from 'react';
import PropTypes from 'prop-types';

const Button = ({buttonChildren, ...props}) => {
    return (
      <button  {...props}>{buttonChildren}</button>
    );
}

Button.propTypes = { 
  buttonChildren: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ])
};

export default Button;