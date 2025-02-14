"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TitleProps {
  label: string;
  subtitle?: string;
  otherclass?: string;
}

const Title = ({ label, subtitle, otherclass }: TitleProps) => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "esaeaseInOut", ease: "linear", duration: 1.5 }}
      className={cn("w-full md:py-10 sm:py-5", otherclass)}
    >
      <h1
        className={cn("font-bold text-white md:text-6xl sm:text-4xl uppercase")}
      >
        {label}
      </h1>
      <h3 className="md:text-3xl sm:text-xl font-light uppercase text-white">
        {subtitle}
      </h3>
    </motion.div>
  );
};

export default Title;
