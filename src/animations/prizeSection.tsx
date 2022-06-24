import { Variants } from 'framer-motion';

export const containerVar: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    }
  }, 
}

export const itemVar: Variants = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7
    }
  }
}
