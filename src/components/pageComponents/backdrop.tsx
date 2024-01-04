import { motion } from "framer-motion";
import { MouseEventHandler, ReactNode } from "react";


type Props = {
  children: ReactNode,
  onClick: MouseEventHandler<HTMLDivElement>
};

const Backdrop = ({children, onClick}: Props) => {

  return (
    <motion.div
      className="modal_backdrop"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      onClick={onClick}>
      {children}
    </motion.div>
  );
};

export default Backdrop;