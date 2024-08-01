import React, { useRef } from 'react';
import { motion, AnimationControls } from 'framer-motion';
import useScrollAnimation from './useScrollAnimation'; // フックのパス

interface AnimatedSectionProps {
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls: AnimationControls = useScrollAnimation(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;