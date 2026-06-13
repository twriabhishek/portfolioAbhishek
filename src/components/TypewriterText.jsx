import { useEffect, useState } from "react";

export function TypewriterText({ text, charDelay = 130, className = "" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
  }, [text]);

  useEffect(() => {
    if (displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, charDelay);

    return () => clearTimeout(timer);
  }, [displayed, text, charDelay]);

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span>{displayed}</span>
      <span className="typed-dot ml-1 inline-block shrink-0" aria-hidden="true" />
    </span>
  );
}
