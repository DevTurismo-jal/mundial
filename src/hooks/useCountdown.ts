"use client";

import { useState, useEffect } from "react";

const TARGET = new Date("2026-06-11T13:00:00-06:00").getTime();

interface CountdownValues {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export function useCountdown(): CountdownValues {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now === null) {
    return { days: "---", hours: "--", minutes: "--", seconds: "--" };
  }

  const distance = TARGET - now;

  if (distance < 0) {
    return { days: "000", hours: "00", minutes: "00", seconds: "00" };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    days: String(days).padStart(3, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}
