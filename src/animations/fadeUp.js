const fadeUp = {
  hidden: {
    opacity: 0,

    y: 80,
  },

  show: {
    opacity: 1,

    y: 0,

    transition: {
      duration: 0.9,

      ease: "easeOut",
    },
  },
};

export default fadeUp;
