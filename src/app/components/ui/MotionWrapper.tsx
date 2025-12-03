'use client';

import { motion } from "motion/react";
import { ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const MotionWrapper = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = ''
}: MotionWrapperProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

