import React from 'react';
import { useLocation } from 'react-router-dom';

import { paths } from '../pages';

const headerStyles = {
  padding: '0.5em 3.2%',
  background: '#F4F4F4',
  fontWeight: '600',
  fontSize: '28px',
  color: '#2D2D2D',
};

export const Header = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === paths.listings && (
        <h1 style={headerStyles}>Property Listings</h1>
      )}
    </div>
  );
};
