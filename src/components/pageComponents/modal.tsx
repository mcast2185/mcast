import { motion } from "framer-motion";


import Backdrop from './backdrop';
import { MouseEventHandler } from "react";
import { dropIn } from '../functionality/framerVariants';


type Props = {
  handleClose: MouseEventHandler, 
  modalOpen: boolean,
  // text: string
};

const Modal = ({handleClose, modalOpen}: Props) => {

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visbile"
        exit="exit"
      >

      </motion.div>
    </Backdrop>
  );
};

export default Modal