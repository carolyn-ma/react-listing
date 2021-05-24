import React from 'react';
import PropTypes from 'prop-types';
import heartFill from '../assets/heart-fill.svg';
import heartStroke from '../assets/heart-stroke.svg';

const styles = {
  container: {
    position: 'relative',
    width: '47px',
    cursor: 'pointer',
  },
  icon: {
    position: 'absolute',
    left: '17.5rem',
    top: '0.5rem',
  },
};

const FavoriteIcon = ({ listingId, isFavorite, toggleFavorite }) => {
  return (
    <div
      style={styles.container}
      onClick={() => toggleFavorite(listingId, isFavorite)}
    >
      {isFavorite ? (
        <img alt={'favorite'} style={styles.icon} src={heartFill} />
      ) : (
        <img alt={'not-favorite'} style={styles.icon} src={heartStroke} />
      )}
    </div>
  );
};

FavoriteIcon.propTypes = {
  listingId: PropTypes.number,
  isFavorite: PropTypes.bool,
  toggleFavorite: PropTypes.func.isRequired,
};

export default FavoriteIcon;
