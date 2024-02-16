import React from 'react';
import { mergeClasses } from '../utils/mergeClasses';

interface SpinnerProps {
  size: 'small' | 'medium' | 'large';
}

const Spinner: React.FC<SpinnerProps> = ({ size }) => {
  return (
    <span
      className={mergeClasses(
        'block animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
        {
          'h-6 w-6 ': size === 'small',
          'h-8 w-8 ': size === 'medium',
          'h-16 w-18 ': size === 'large',
        }
      )}
      role="status"
    />
  );
};

export default Spinner;
