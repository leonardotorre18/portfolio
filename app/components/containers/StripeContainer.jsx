import React from 'react';
import '../../styles/StripeContainer.scss';
import PropTypes from 'prop-types';

export default function StripeContainer({ children }) {
  return (
    <div className="stripe-container">{children}</div>
  );
}

StripeContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};
