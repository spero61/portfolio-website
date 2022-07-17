import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@chakra-ui/react';
import Modal from './motion/Modal';

function ModalButton({
  text, text2 = '', url = '', linkButtonText = '',
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="modal-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Detail
      </motion.button>

      {/* https://www.framer.com/docs/animate-presence/ */}
      <AnimatePresence
        initial={false}
        exitBeforeEnter
        onExitComplete={() => null}
      >
        {modalOpen
        && (
        <Modal
          text={text}
          text2={text2}
          url={url}
          linkButtonText={linkButtonText}
          modalOpen={modalOpen}
          handleClose={close}
        />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ModalButton;
