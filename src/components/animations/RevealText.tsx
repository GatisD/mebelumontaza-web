import { motion, useReducedMotion } from "framer-motion";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  id?: string;
}

export default function RevealText({ text, as: Tag = "h1", className, delay = 0, id, ...rest }: Props) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) return <Tag id={id} className={className} {...rest}>{text}</Tag>;

  return (
    <Tag id={id} className={className} {...rest}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
