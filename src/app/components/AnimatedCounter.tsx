"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

interface AnimatedCounterProps {
  to: number;
}

const AnimatedCounter = ({ to }: AnimatedCounterProps) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStart(true);
            observer.disconnect(); // animate once
          }
        });
      },
      { threshold: 0.5 } // 50% visible ho tab start ho
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useAnimationFrame(() => {
    if (!start) return;

    const latest = count.get();
    if (latest < to) {
      const increment = to / 60;
      const newValue = Math.min(to, latest + increment);
      count.set(newValue);
      setDisplay(Math.floor(newValue));
    }
  });

  useEffect(() => {
    if (!start) {
      count.set(0);
      setDisplay(0);
    }
  }, [to, start]);

  return <motion.span ref={ref}>{display.toLocaleString()}</motion.span>;
};

export default AnimatedCounter;
