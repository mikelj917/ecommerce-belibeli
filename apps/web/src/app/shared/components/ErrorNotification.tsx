"use client";
import { AnimatePresence,motion } from "framer-motion";
import { BadgeAlertIcon } from "lucide-react";
import { useEffect, useState } from "react";

type NotificationProps = {
  title: string;
  message: string;
  duration?: number; // ms
  onClose?: () => void;
};

export const ErrorNotification = ({
  title,
  message,
  duration = 3000,
  onClose,
}: NotificationProps) => {
  const [progress, setProgress] = useState(100);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = 50;
    const decrement = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev - decrement;
        if (newProgress <= 0) {
          clearInterval(timer);
          // Inicia animação de saída
          setIsVisible(false);
          return 0;
        }
        return newProgress;
      });
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [duration]);

  // Chama onClose DEPOIS da animação de saída
  const handleExitComplete = () => {
    onClose?.();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="error-notification"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed top-6 right-6 z-50 flex w-80 flex-col rounded-lg border border-red-300 bg-red-100 shadow-lg"
        >
          <div className="flex items-start gap-3 p-3 text-red-800">
            <BadgeAlertIcon className="size-9 stroke-red-500" />
            <div>
              <h1 className="font-bold">{title}</h1>
              <p className="text-sm">{message}</p>
            </div>
          </div>

          {/* Barra de progresso */}
          <div className="h-1 w-full overflow-hidden rounded-b-lg bg-red-300">
            <motion.div
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.05, ease: "linear" }}
              className="h-full bg-red-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
