import React from 'react';

export default function ErrorMessage({ message }) {
  return (
    <div className="text-white">
      {message}
    </div>
  );
}
ErrorMessage.defaultProps = {
  message: 'Ha ocurrido un error',
};
