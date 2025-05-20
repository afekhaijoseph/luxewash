import { motion } from 'framer-motion';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: '0',
    opacity: 1,
    transition: { delay: 0.1 },
  },
};

const Modal = ({ showModal, closeModal, children }) => {
  if (!showModal) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={closeModal}
    >
      <motion.div
        className="bg-primary rounded-lg p-6 shadow-lg w-11/12 max-w-md"
        variants={modal}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button className="text-gray-300 float-right" onClick={closeModal}>
          ✕
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;