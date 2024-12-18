"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const sectionRef = useRef(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(sectionRef, { threshold: 0.5 });

  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-neutral-50 uppercase opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        "font-bold font-[family-name:var(--font-obviously)] grid place-content-center h-screen bg-purple-700 -z-10 relative",
        className
      )}
    >
      <div className="mt-4 container mx-auto">
        <div className="text-7xl leading-normal">{renderWords()}</div>
      </div>
    </div>
  );
};
