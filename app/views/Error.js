import React from 'react';
import { useNavigate } from 'react-router';

export default function Error() {
  const history = useNavigate();

  return (
    <div>
      Esta es una vista de error para error
      <button
        type="button"
        onClick={() => history('/')}
        className="text-light bg-red-600"
      >
        Regresar
      </button>
    </div>
  );
}
