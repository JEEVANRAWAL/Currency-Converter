import { cn } from "../lib/utils"; // Optional: Utility for conditional className management
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

const TypewriterEffect = ({ words = [], className, cursorClassName }) => {
  // Convert words into an array of characters
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""), // Split the word into individual characters
  }));

  // Animation hooks
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  // Animate characters when they come into view
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { display: "inline-block", opacity: 1, width: "fit-content" },
        { duration: 0.3, delay: stagger(0.1), ease: "easeInOut" }
      );
    }
  }, [isInView]);

  // Render words with proper styles and spacing
  const renderWords = () => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, idx) => (
        <div
          key={`word-${idx}`}
          className="inline-block"
          style={{
            marginRight: idx === wordsArray.length - 1 ? "0" : "0.5rem",
          }} // Add spacing except for the last word
        >
          {word.text.map((char, index) => (
            <motion.span
              initial={{ opacity: 0 }}
              key={`char-${index}`}
              className={`opacity-0 hidden ${word.className}`} // Apply word-specific styles here
            >
              {char}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export default TypewriterEffect;
