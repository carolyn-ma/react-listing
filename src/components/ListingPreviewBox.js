import React from 'react';
import FavoriteIcon from './FavoriteIcon';

const styles = {
  flexbox: {
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '300px',
    color: '#2D2D2D',
  },
  fixedHeightRounded: {
    width: '315px',
    height: '280px',
    borderRadius: '4px',
    marginBottom: '0.5rem',
  },
  large: {
    fontSize: '20px',
    fontWeight: '600',
  },
  xlargeBold: {
    fontSize: '26px',
    fontWeight: 'bold',
  },
  smallCap: {
    fontSize: '15px',
    textTransform: 'capitalize',
  },
  smallGrey: {
    fontSize: '14px',
    color: '#979797',
  },
};

export const ListingPreviewBox = ({ listing, isFavorite, toggleFavorite }) => {
  const property = listing.property;
  const currencyOptions = {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  };
  const addr = listing.address;
  const listDate = new Date(listing.listDate);

  return (
    <div id={`listing-${listing.mlsId} `} style={styles.flexbox}>
      <FavoriteIcon
        listingId={listing.mlsId}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
      <img
        alt="property"
        id={`listing-${listing.mlsId}-photo`}
        src={listing.photos?.[0]}
        style={styles.fixedHeightRounded}
      />
      <div id={`listing-${listing.mlsId}-details`} style={styles.large}>
        <span>{property?.bedrooms} BR | </span>
        <span>{property?.bathsFull + property?.bathsHalf / 2} Bath | </span>
        <span>{property?.area} Sq Ft</span>
      </div>
      <div id={`listing-${listing.mlsId}-price`} style={styles.xlargeBold}>
        {listing.listPrice?.toLocaleString('en-US', currencyOptions)}
      </div>
      <div id={`listing-${listing.mlsId}-addr`} style={styles.smallCap}>
        {addr?.streetNumber} {addr?.streetName?.toLowerCase()}, {addr?.city},{' '}
        {addr?.state}
      </div>
      <div id={`listing-${listing.mlsId}-listdate`} style={styles.smallGrey}>
        Listed:
        <span> {listDate.getMonth() + 1}/</span>
        <span>{listDate.getDate()}/</span>
        <span>{listDate.getFullYear()}</span>
      </div>
    </div>
  );
};
