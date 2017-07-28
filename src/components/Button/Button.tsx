import * as React from 'react';
import './Button.css';

interface ButtonProps {
  className: string;
  children: string;
  onPress(event: React.FormEvent<HTMLButtonElement>): void;
}

const Button = ({ className, children, onPress }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onPress}
    >
      {children}
    </button>
  );
};

export default Button;
