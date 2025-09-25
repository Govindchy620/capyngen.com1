"use client";

import {
  useEffect,
  useRef,
  useState,
  createElement,
  useMemo,
  useCallback,
} from "react";
import { gsap } from "gsap";
import "./TextType.css";

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  textColor, // ✅ new prop
  variableSpeed,
  onComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  // Reverse or normal text
  const processedText = useMemo(
    () => (reverseMode ? text.split("").reverse().join("") : text),
    [text, reverseMode]
  );

  // Variable speed typing
  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  // Determine text color
  const getCurrentTextColor = () => {
    if (textColor) return textColor; // ✅ priority
    if (textColors.length > 0) return textColors[0];
    return "inherit"; // fallback
  };

  // Cursor blink animation
  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  // Restart typing when visible
  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDisplayedText("");
            setCurrentCharIndex(0);
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  // Typing effect
  useEffect(() => {
    if (!isVisible) return;

    let timeout;

    if (currentCharIndex < processedText.length) {
      timeout = setTimeout(
        () => {
          setDisplayedText((prev) => prev + processedText[currentCharIndex]);
          setCurrentCharIndex((prev) => prev + 1);
        },
        variableSpeed ? getRandomSpeed() : typingSpeed
      );
    } else if (onComplete) {
      onComplete();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    typingSpeed,
    variableSpeed,
    getRandomSpeed,
    isVisible,
    processedText,
    onComplete,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping && currentCharIndex < processedText.length;

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `text-type ${className}`,
      ...props,
    },
    <>
      <span
        className="text-type__content"
        style={{ color: getCurrentTextColor() }}
      >
        {displayedText}
      </span>
      {showCursor && (
        <span
          ref={cursorRef}
          className={`text-type__cursor ${cursorClassName}`}
          style={{
            visibility: shouldHideCursor ? "hidden" : "visible", // ✅ avoids layout shift
            display: "inline-block", // ✅ keeps space reserved
            whiteSpace: "pre", // ✅ prevents collapsing
          }}
        >
          {cursorCharacter}
        </span>
      )}
    </>
  );
};

export default TextType;
