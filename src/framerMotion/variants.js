export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 0 : direction === "down" ? 0 : 0,
      x: direction === "left" ? 0 : direction === "right" ? 0 : 0,
      opacity: 1,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
