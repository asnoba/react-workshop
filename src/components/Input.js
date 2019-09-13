import React from 'react';

function Input(props) {
  const { type, value, onChange, style } = props;

  const styles = {
    lineHeight: '36px',
    fontSize: '14px',
    height: '36px',
    padding: '0 8px',
    border: '1px solid #333',
    outline: 'none',
  };

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      style={{ ...styles, ...style }}
    />
  );
}

export default Input;
