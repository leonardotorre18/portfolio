import React from 'react';
import './Img3D.scss';
// import PropTypes from 'prop-types';

export default function Img3D({ img }) {
  return (
    <div
      className="w-full container-3d"
    >
      <img
        className="object-cover w-full transition-all duration-700"
        id="imagen"
        src={img}
        alt="Logo Generico"
      />
    </div>
  );
}

// Img3D.defaultProps = {
//   img: '',
// };

// Img3D.propTypes = {
//   img: PropTypes.string(),
// };
