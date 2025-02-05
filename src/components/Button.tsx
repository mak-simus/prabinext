import React from 'react';

const Button = ({ type, children }: { type: 'button' | 'submit' | 'reset', children: React.ReactNode }) => {
  return (
    <button type={type}>
      {children}
    </button>
  );
};

export default Button;
