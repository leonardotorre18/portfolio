import React from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { RiMailSendLine } from 'react-icons/ri';
import ErrorMessage from '../pure/ErrorMessage';

const SubmitSchema = Yup.object().shape({
  from_name: Yup.string()
    .min(2, 'Ese nombre es muy corto')
    .max(50, 'Ese nombre es muy largo')
    .required('El nombre es Requerido'),
  email: Yup.string()
    .email('Email no válido')
    .min(7, 'Email no válido')
    .required('El email es necesario'),
  message: Yup.string()
    .min(10, 'El mensaje es muy corto')
    .required('El mesaje es necesario'),
});

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-7xl mx-auto px-2 py-4"
    >
      <h3 className="text-white font-first tracking-[-0.2em] text-4xl">
        Envíame un correo para hablar conmigo
      </h3>
      <Formik
        initialValues={{
          to_name: 'LeonardoTorre',
          from_name: '',
          email: '',
          message: '',
        }}
        validationSchema={SubmitSchema}
        onSubmit={(values, { resetForm }) => {
          emailjs.send(
            'service_9mz7wn6',
            'template_7ug9qbm',
            values,
            '7oT8xzf_om6HQWmpG',
          );
          resetForm();
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form
            className="flex flex-col gap-3 p-2"
            onSubmit={handleSubmit}
          >
            {/* Styles of input is in index.scss */}
            <Field
              className="p-2"
              type="hidden"
              name="to_name"
              value="LeonardoTorre"
            />
            <Field
              className="input"
              type="text"
              name="from_name"
              placeholder="Escribe tu nombre..."
            />
            <Field
              className="input"
              type="email"
              name="email"
              placeholder="Escribe tu email..."
            />
            <Field
              className="input"
              type="text"
              as="textarea"
              rows="6"
              name="message"
              placeholder="Déjame un mensaje..."
            />
            { errors.from_name && touched.from_name
              ? <ErrorMessage message={errors.from_name} />
              : null }
            { errors.email && touched.email
              ? <ErrorMessage message={errors.email} />
              : null }
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
    </motion.div>
  );
}
