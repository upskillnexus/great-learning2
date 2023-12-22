import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import React, { useEffect } from "react";

const Fade = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  console.log(inView);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView]);

  return (
    <>
      <motion.div
        style={{ height: "100%", width: "100%" }}
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Fade;
