"use client";

import { useState, useEffect } from "react";

export function useLiveCounter(initial: number, interval = 3000) {
  const [value, setValue] = useState(initial);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => prev + Math.floor(Math.random() * 3));
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return value;
}
