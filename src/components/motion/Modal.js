import { motion } from 'framer-motion';
import { Text, Button } from '@chakra-ui/react';
import Backdrop from './Backdrop';

const flip = {
  hidden: {
    transform: 'scale(0) rotateX(-360deg)',
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: ' scale(1) rotateX(0deg)',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: 'scale(0) rotateX(360deg)',
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Modal = ({
  handleClose, text, text2, url, linkButtonText,
}) => (
  <Backdrop onClick={handleClose}>
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className="modal"
      variants={flip}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.button
        className="close-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClose}
        type="button"
      >
        X
      </motion.button>
      <Text
        mt={4}
        px={[1, 4, 10]}
        fontSize={['1rem', '1.1rem', '1.2rem']}
        textAlign="left"
        color="text01"
      >
        {text}
      </Text>
      <Text
        mt={4}
        px={[1, 4, 10]}
        fontSize={['1rem', '1.1rem', '1.2rem']}
        textAlign="left"
        color="text04"
      >
        {text2}
      </Text>
      {url && (
      <Button
        as={motion.button}
        mt={5}
        bg="pink.100"
        fontSize={['0.8rem', '0.9rem', '1rem']}
        type="button"
        onClick={() => window.open(url)}
        // variants={onScrollView}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        _hover={{
          background: 'pink.300',
          color: 'gray.700',
        }}
      >
        {linkButtonText}
      </Button>
      )}
    </motion.div>
  </Backdrop>
);

export default Modal;
