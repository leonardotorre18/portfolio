import React from 'react';
import { GoAlert } from 'react-icons/go';

export default function ErrorMessage({ message }:{message:string | any}) {
  return (
    <div className="text-light">
      <span className="flex items-center bg-main w-max px-2 gap-2">
        <GoAlert className="text-light" />
        {message}
      </span>
    </div>
  );
}
ErrorMessage.defaultProps = {
  message: 'Ha ocurrido un error',
};