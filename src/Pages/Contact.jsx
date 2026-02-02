import React from 'react'
import { motion } from 'framer-motion'
import Concate from '../Components/Contact/Contact.jsx'
import Footer from '../Components/Footer/Footer'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Contact = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <motion.div variants={sectionVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
        <Concate />
      </motion.div>
      <motion.div variants={sectionVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
        <Footer />
      </motion.div>
    </motion.div>
  )
}

export default Contact
