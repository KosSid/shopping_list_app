import React from 'react';
import { Toaster } from 'react-hot-toast';

const AppToster: React.FC = () => (
  <Toaster
    position="bottom-center"
    gutter={12}
    containerStyle={{ margin: '8px' }}
    toastOptions={{
      success: {
        duration: 2000,
      },
      error: {
        duration: 3000,
      },
      style: {
        fontSize: '1rem',
        maxWidth: '300px',
        padding: '1rem 1.5rem',
        backgroundColor: '#eff6ff',
        color: 'var(--color-grey-700)',
      },
    }}
  />
);

export default AppToster;
