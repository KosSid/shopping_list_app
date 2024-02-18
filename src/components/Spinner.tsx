import React from 'react';
import { mergeClasses } from '../utils/mergeClasses';

interface SpinnerProps {
  size: 'small' | 'medium' | 'large';
}

const Spinner: React.FC<SpinnerProps> = ({ size }) => {
  return (
    <span
      className={mergeClasses(
        'block animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
        {
          'h-6 w-6 border-2': size === 'small',
          'h-8 w-8 border-3': size === 'medium',
          'h-20 w-20 border-4': size === 'large',
        }
      )}
      role="status"
    />
  );
};

export default Spinner;
