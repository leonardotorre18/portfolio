import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/forms/ContactForm';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: -1000 }}
    >
      <ContactForm />
    </motion.div>
  );
}
