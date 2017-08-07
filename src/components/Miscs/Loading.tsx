import * as React from 'react';
import './Loading.css';

interface LoadingProps {
  children: string;
}

const Loading = ({children}: LoadingProps) => {
  return (
    <div className="loading">{children}</div>
  );
};

export default Loading;
