import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const LazyImage = ({ src, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      setError(true);
    };
  }, [src]);

  return (
    <div className={`lazy-image-container ${className || ''}`}>
      <div className={`skeleton-loader ${imageLoaded ? 'loaded' : ''}`} />
      {!error && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${imageLoaded ? 'loaded' : ''}`}
          loading="lazy"
        />
      )}
      {error && <div className="error-placeholder">Failed to load image</div>}
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};

LazyImage.defaultProps = {
  className: ''
};

export default LazyImage;