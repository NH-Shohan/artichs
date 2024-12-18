"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const ParallaxScroll = ({ images, className }) => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      ref={containerRef}
      className={cn("h-[200vh] w-full relative overflow-hidden", className)}
    >
      {/* Parallax Images */}
      <div className="sticky top-0 h-screen w-full">
        <div
          className="container h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start mx-auto gap-4 px-10"
          ref={gridRef}
        >
          <div className="grid gap-4">
            {firstPart.map((el, idx) => (
              <motion.div style={{ y: translateFirst }} key={`grid-1-${idx}`}>
                <Image
                  src={el}
                  className="h-96 w-full object-cover object-center rounded-2xl"
                  height="400"
                  width="400"
                  alt={`Thumbnail ${idx + 1}`}
                />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4">
            {secondPart.map((el, idx) => (
              <motion.div style={{ y: translateSecond }} key={`grid-2-${idx}`}>
                <Image
                  src={el}
                  className="h-96 w-full object-cover object-center rounded-2xl"
                  height="400"
                  width="400"
                  alt={`Thumbnail ${idx + 1}`}
                />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4">
            {thirdPart.map((el, idx) => (
              <motion.div style={{ y: translateThird }} key={`grid-3-${idx}`}>
                <Image
                  src={el}
                  className="h-96 w-full object-cover object-center rounded-2xl"
                  height="400"
                  width="400"
                  alt={`Thumbnail ${idx + 1}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
