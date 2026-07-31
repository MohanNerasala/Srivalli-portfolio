import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TypewriterText = ({ text, delay = 0, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (!isInView) return;

    let timeoutId;
    let i = 0;

    const typeWriter = () => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        timeoutId = setTimeout(typeWriter, 30 + Math.random() * 40); // Random typing speed
      }
    };

    const initialDelay = setTimeout(typeWriter, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(initialDelay);
    };
  }, [isInView, text, delay]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {isInView && displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          style={{ display: "inline-block", width: "8px", height: "1em", backgroundColor: "currentColor", marginLeft: "2px", verticalAlign: "middle" }}
        />
      )}
    </span>
  );
};

export default TypewriterText;
