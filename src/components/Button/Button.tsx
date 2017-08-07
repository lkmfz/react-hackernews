import * as React from 'react';
import './Button.css';
import Loading from '../Miscs/Loading';

interface ButtonProps {
  className: string;
  children: string;
  isLoading: boolean;
  isLoadingHidden: boolean;
  onPress(event: React.FormEvent<HTMLButtonElement>): void;
}

const Button = ({ className, children, isLoadingHidden, isLoading, onPress }: ButtonProps) => {
  if (isLoadingHidden) {
    return <Loading children={''}/>;
  }
  if (isLoading) {
    return <Loading children={'Loading...'}/>;
  }
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
