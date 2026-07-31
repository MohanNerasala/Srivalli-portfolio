import React from 'react';
import { motion } from 'framer-motion';

// For Headers and Titles (Slides up smoothly)
export const SlideUp = ({ children, className = "", delay = 0, el: Wrapper = "div" }) => {
  const displayStyle = Wrapper === "span" ? "inline-block" : "block";
  return (
    <Wrapper className={className} style={{ overflow: "hidden", display: displayStyle }}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: delay }}
      >
        {children}
      </motion.div>
    </Wrapper>
  );
};

// For Paragraphs (Lightweight fade in, NO lag)
export const FadeIn = ({ children, className = "", delay = 0, el: Wrapper = "div" }) => {
  return (
    <Wrapper className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: delay }}
      >
        {children}
      </motion.div>
    </Wrapper>
  );
};
