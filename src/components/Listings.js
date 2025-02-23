import React, { useEffect, useState } from 'react';

import { LocalStorageKeys } from '../apis/_apis';
import { getPropertyListings } from '../apis/getPropertyListings';
import ListingPreviewBox from './ListingPreviewBox';

const styles = {
  background: '#ffffff',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  height: '86%',
  overflow: 'auto',
};

export const Listings = () => {
  useEffect(() => {
    getPropertyListings();
  });

  const [listings] = useState(
    window.localStorage.getItem(LocalStorageKeys.listings) ?? '[]',
  );

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = window.localStorage.getItem(
      LocalStorageKeys.favorites,
    );

    return savedFavorites ? JSON.parse(savedFavorites) : {};
  });

  const toggleFavorite = (id, isFavorite) => {
    setFavorites((prevState) => ({
      ...prevState,
      [id]: !isFavorite,
    }));
    window.localStorage.setItem(
      LocalStorageKeys.favorites,
      JSON.stringify(favorites),
    );
  };

  const listingBoxes = JSON.parse(listings)?.map((listing) => {
    const isFav = favorites?.[listing.mlsId] || false;
    return (
      <ListingPreviewBox
        key={listing.mlsId}
        listing={listing}
        isFavorite={isFav}
        toggleFavorite={toggleFavorite}
      />
    );
  });

  return <div style={styles}>{listingBoxes}</div>;
};
