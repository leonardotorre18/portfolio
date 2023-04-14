import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '../buttons/Button';
import ErrorMessage from '../pure/ErrorMessage';
import emailjs from '@emailjs/browser';
import { FormattedMessage } from 'react-intl';
import useValidateLang from '../hooks/useValidateLang';
import PlaceHoldersES from '../lang/es-PlaceholderContact.json';
import PlaceHoldersEN from '../lang/en-PlaceholderContact.json';


export default function FormEmail() {

  const Lang = useValidateLang({
    es: PlaceHoldersES,
    en: PlaceHoldersEN
  });

  const SubmitSchema = Yup.object().shape({
    from_name: Yup.string()
      .min(2, 'El nombre es muy corto')
      .max(50, 'El nombre es muy largo')
      .required('El nombre es requerido'),
    email: Yup.string()
      .email('Email no válido')
      .min(7, 'Email no válido')
      .required('El email es necesario'),
    message: Yup.string()
      .min(10, 'El mensaje es muy corto')
      .max(5000, 'El mensaje es muy largo')
      .required('El mesaje es necesario'),
  });


  return (
    <Formik
      validationSchema={SubmitSchema}
      initialValues={{
        from_name: '',
        email: '',
        message: '',
      }}
      onSubmit={(values, {resetForm})=>{ 
        resetForm()
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          values,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
      }}
    >
    {({ errors, touched }: {errors: any, touched: any}) => (
      <Form>
        <div className='flex flex-col gap-4'>
          <Field
            type="hidden"
            name="to_name"
            value="LeonardoTorre"
          />
          <Field
            name='from_name'
            className="input"
            placeholder={Lang.from_name}
          />
          { errors.from_name && touched.from_name ? <ErrorMessage message={errors.from_name} /> : null }
          <Field
            name='email'
            className="input"
            placeholder={Lang.email}
          />
          { errors.email && touched.email ? <ErrorMessage message={errors.email} /> : null }
          <Field
            name='message'
            rows='5'
            as='textarea'
            className="input"
            placeholder={Lang.message}
          />
          { errors.message && touched.message ? <ErrorMessage message={errors.message} /> : null }
        </div>
        <div className='flex mt-6 justify-center'>
          <Button options={{
            type: 'submit'
          }}>
            <FormattedMessage id='Contact.Button.send' />
          </Button>  
        </div>
      </Form>
    )}
    </Formik>
  )
}
