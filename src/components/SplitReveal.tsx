"use client";

import { motion } from "motion/react";
import { Fragment, type ElementType } from "react";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
};

export function SplitReveal({ text, as: Tag = "span", className, delay = 0, stagger = 0.05 }: Props) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, i) => (
          <Fragment key={i}>
            <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: delay + i * stagger }}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </span>
    </Tag>
  );
}
