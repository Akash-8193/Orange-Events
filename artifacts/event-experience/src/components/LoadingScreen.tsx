import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000);
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const line1 = "ORANGE";
  const line2 = "EVENTS";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center"
        >
          <div className="flex overflow-hidden mb-1">
            {line1.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="text-4xl md:text-6xl tracking-[0.3em] font-serif text-foreground ml-[0.3em]"
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="flex overflow-hidden">
            {line2.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i + line1.length}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="text-4xl md:text-6xl tracking-[0.3em] font-serif text-primary ml-[0.3em]"
              >
                {char}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
            className="mt-8 text-sm uppercase tracking-[0.2em] text-muted-foreground"
          >
            & Conferences Pvt. Ltd.
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
