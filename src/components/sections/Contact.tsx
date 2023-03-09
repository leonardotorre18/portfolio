import React from 'react'
import * as Yup from 'yup';

const SubmitSchema = Yup.object().shape({
  from_name: Yup.string()
    .min(2, 'El nombre es muy corto')
    .max(50, 'El nombre es muy largo')
    .required('El nombre es Requerido'),
  email: Yup.string()
    .email('Email no válido')
    .min(7, 'Email no válido')
    .required('El email es necesario'),
  message: Yup.string()
    .min(10, 'El mensaje es muy corto')
    .max(5000, 'El mensaje es muy largo')
    .required('El mesaje es necesario'),
});

export default function () {
  return (
    <div>
      <h3 className=' text-3xl font-semibold mb-6'>Contact Me</h3>
      <form action=""></form>
    </div>
  )
}

