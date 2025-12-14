"use client";

import { useEffect, useMemo, useState } from "react";

const DEFAULT_WORDS = ["custom web apps", "business tools", "e-commerce web apps", "bots"];

type Props = {
  words?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  minWidthCh?: number;
};

export function RotatingAccentText({
  words = DEFAULT_WORDS,
  typingSpeed = 140,
  deletingSpeed = 45,
  pauseMs = 1600,
  minWidthCh = 0,
}: Props) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const lengthStats = useMemo(() => {
    if (!words.length) return { min: 0, max: 0 };
    const lengths = words.map((w) => w.length);
    return { min: Math.min(...lengths), max: Math.max(...lengths) };
  }, [words]);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (words.length === 0) return;

    if (reduceMotion) {
      setText(words[0]);
      return;
    }

    const currentWord = words[wordIndex];
    const { min, max } = lengthStats;
    const factor =
      max === min ? 1 : 1 + ((currentWord.length - min) / (max - min)) * 1; // up to 2x for longest
    const effectiveTyping = Math.max(20, typingSpeed / factor);
    const effectiveDeleting = Math.max(10, deletingSpeed / factor);

    let delay = isDeleting ? effectiveDeleting : effectiveTyping;

    if (!isDeleting && text === currentWord) {
      delay = pauseMs;
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      delay = effectiveTyping;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        // handled above
      } else {
        const nextText = isDeleting
          ? currentWord.slice(0, Math.max(0, text.length - 1))
          : currentWord.slice(0, text.length + 1);
        setText(nextText);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs, reduceMotion]);

  const displayText = useMemo(() => {
    if (reduceMotion) return words[0] || "";
    return text;
  }, [text, words, reduceMotion]);

  return (
    <span className="relative inline-flex items-baseline gap-1 leading-tight">
      <span
        aria-hidden="true"
        className="font-medium text-[#16A34A]"
        style={minWidthCh ? { minWidth: `${minWidthCh}ch` } : undefined}
      >
        {displayText}
      </span>
      <span
        aria-hidden="true"
        className={`inline-block h-[1.1em] w-[1px] translate-y-[5px] bg-[#16A34A] ${reduceMotion ? "" : "animate-pulse"}`}
      />
      <span className="sr-only">
        custom web apps, business tools, e-commerce web apps, and bots
      </span>
    </span>
  );
}
