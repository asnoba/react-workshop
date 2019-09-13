import React from 'react';

function Button(props) {
  const {
    onClick,
    children,
    size = 'md',
    type = 'primary',
    rounded = false,
    style,
  } = props;

  const styles = {
    color: '#fff',
    display: 'inline-block',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: rounded && '4px',

    sm: {
      paddingRight: '8px',
      paddingLeft: '8px',
      lineHeight: '24px',
      height: '24px',
      fontSize: '12px',
    },

    md: {
      paddingRight: '16px',
      paddingLeft: '16px',
      lineHeight: '36px',
      height: '36px',
      fontSize: '14px',
    },

    primary: {
      backgroundColor: '#333',
    },

    danger: {
      backgroundColor: 'red',
    },
  };

  return (
    <button
      onClick={onClick}
      style={{ ...styles, ...styles[size], ...styles[type], ...style }}
    >
      {children}
    </button>
  );
}

export default Button;
