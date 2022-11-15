import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { RiMailSendLine } from 'react-icons/ri';
import ErrorMessage from '../components/pure/ErrorMessage';

const SubmitSchema = Yup.object().shape({
  from_name: Yup.string()
    .min(2, 'Ese nombre es muy corto')
    .max(50, 'Ese nombre es muy largo')
    .required('El nombre es Requerido'),
  message: Yup.string()
    .min(10, 'El mensaje es muy corto')
    .required('El mesaje es necesario'),
});

export default function Contact() {
  const form = useRef(null);

  return (
    <div className="max-w-7xl mx-auto px-2 py-4">
      <h3 className="text-white font-first tracking-[-0.2em] text-4xl">
        Envíame un correo para hablar conmigo
      </h3>
      <Formik
        initialValues={{ from_name: '' }}
        validationSchema={SubmitSchema}
        onSubmit={(values, { resetForm }) => {
          // emailjs.sendForm('service_9mz7wn6','template_7ug9qbm',form.current,'7oT8xzf_om6HQWmpG')
          console.log(form);
          resetForm();
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form
            className="flex flex-col gap-3 p-2"
            onSubmit={handleSubmit}
            ref={form}
          >
            <Field
              className="p-2"
              type="hidden"
              name="to_name"
              value="LeonardoTorre"
            />
            <Field
              className="p-2"
              type="text"
              name="from_name"
              placeholder="Tu nombre"
            />
            { errors.from_name && touched.from_name
              ? <ErrorMessage message={errors.from_name} />
              : null }
            <Field
              name="message"
              placeholder="Mensaje"
            >
              {({ field }) => (
                <textarea
                  className="p-2"
                  rows="6"
                  placeholder="Escribe tu mensaje..."
                  name={field.name}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  value={field.value}
                />
              )}
            </Field>
            { errors.message && touched.message
              ? <ErrorMessage message={errors.message} />
              : null }
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-main p-2 rounded flex items-center gap-2 hover:text-dark hover:bg-light transition-colors"
              >
                <RiMailSendLine />
                Enviar Mail
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
