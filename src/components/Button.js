import React from 'react';
import PropTypes from 'prop-types';

const Button = ({...props}) => {
    return (
      <button  {...props}>{props.children}</button>
    );
}


Button.defaultProps = {
   children: 'btn'
};
export default Button;