import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  x?: number;
  y?: number;
  duration?: number;
  delay?: number;
  children: React.ReactNode;
}

export const Reveal: React.FC<RevealProps> = ({
  x = 0,
  y = 50,
  duration = 0.5,
  delay = 0,
  children,
}) => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={scrollRef} className="overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: y, x: x },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: delay }}
        viewport={{ root: scrollRef }}
      >
        {children}
      </motion.div>
    </div>
  );
};
