// components/TypewriterLoop.js
"use client";
import { useState, useEffect } from "react";

const TypewriterLoop = ({ texts, typingSpeed = 100, pause = 1000 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex % texts.length];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayText(currentText.slice(0, charIndex + 1));
        if (charIndex + 1 === currentText.length) {
          setDeleting(true);
        } else {
          setCharIndex(charIndex + 1);
        }
      } else {
        setDisplayText(currentText.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setTextIndex((prev) => prev + 1);
          setCharIndex(0);
        } else {
          setCharIndex(charIndex - 1);
        }
      }
    }, deleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, typingSpeed]);

  return (
    <h1 className="text-2xl md:text-5xl font-bold text-white font-mono">
      {displayText}
      <span className="animate-blink">|</span>
    </h1>
  );
};

export default TypewriterLoop;
