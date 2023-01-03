import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { RiMailSendLine } from 'react-icons/ri';
import ErrorMessage from '../pure/ErrorMessage';

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

export default function ContactForm() {
  const [sendMail, setSendMail] = useState(false);
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
          setSendMail(true);
          resetForm();
        }}
      >
        { sendMail
          ? <SendMessage setSendMail={setSendMail} />
          : ({ handleSubmit, errors, touched }) => (
            <MainForm
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
          )}
      </Formik>
    </motion.div>
  );
}

function MainForm({ handleSubmit, errors, touched }) {
  return (
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
      { errors.from_name && touched.from_name
        ? <ErrorMessage message={errors.from_name} />
        : null }
      <Field
        className="input"
        type="email"
        name="email"
        placeholder="Escribe tu email..."
      />
      { errors.email && touched.email
        ? <ErrorMessage message={errors.email} />
        : null }
      <Field
        className="input"
        type="text"
        as="textarea"
        rows="6"
        name="message"
        placeholder="Déjame un mensaje..."
      />
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
  );
}

function SendMessage({ setSendMail }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-10 gap-4 bg-dark p-4 max-w-lg mx-auto">
        <h4 className="text-light">
          Su mensaje ha sido enviado con exito...
        </h4>
        <button
          type="button"
          onClick={() => setSendMail(false)}
          className="text-dark bg-light hover:text-light hover:bg-main transition-colors py-2 px-3 rounded"
        >
          Enviar otro mail
        </button>
      </div>
    </div>
  );
}
