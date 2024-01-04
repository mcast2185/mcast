export const ListContainer = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      delay: .75,
      delayChildren: 1,
      staggerChildren: .55
    },
  }
};

export const ListItem = {
  hidden: {y: "100%"},
  visible: {
    y: "0%",
    transition: {
      duration: .5
    },
  }
};

export const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: .1,
      type: "spring",
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: "100vh",
    opacity: 0
  }
}