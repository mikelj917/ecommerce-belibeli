"use client";

import { useEffect, useMemo, useState } from "react";
import { FlashSaleDigit } from "./FlashSaleDigit";

export const FlashSaleTimer = ({ endDate }: { endDate: string }) => {
  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const formatedDate = useMemo(() => new Date(endDate).getTime(), [endDate]);

  useEffect(() => {
    if (!formatedDate) return;
    const interval = setInterval(() => {
      const actualDate = Date.now();
      const diff = formatedDate - actualDate;

      setTimer({
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });

      if (diff <= 0) {
        clearInterval(interval);
        setTimer({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [formatedDate]);

  return (
    <div className="flex items-center gap-1">
      <FlashSaleDigit digit={timer.hours} separator={true} />
      <FlashSaleDigit digit={timer.minutes} separator={true} />
      <FlashSaleDigit digit={timer.seconds} separator={false} />
    </div>
  );
};
