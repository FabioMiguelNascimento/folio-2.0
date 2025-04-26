import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  href, 
  icon,
  iconPosition = 'left',
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const classes = `btn btn--${variant} ${className}`.trim();
  const iconElement = icon && <FontAwesomeIcon icon={icon} />;
  
  const content = (
    <>
      {iconPosition === 'left' && iconElement}
      {children}
      {iconPosition === 'right' && iconElement}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.object,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'pill', 'ghost']),
  className: PropTypes.string,
};

export default Button;