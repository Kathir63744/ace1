"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: i * 0.2,
        type: "spring",
        duration: 1.5,
        bounce: 0.2,
        ease: "easeInOut",
      },
      opacity: { delay: i * 0.2, duration: 0.2 },
    },
  }),
};

export default function SuccessPopup({ onClose }) {
  return (
    <Card className="w-full max-w-sm mx-auto p-6 min-h-[300px] flex flex-col justify-center bg-zinc-900 dark:bg-white border-zinc-800 dark:border-zinc-200 backdrop-blur-sm">
      <CardContent className="space-y-4 flex flex-col items-center justify-center">
        {/* Animated Checkmark */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
            scale: {
              type: "spring",
              damping: 15,
              stiffness: 200,
            },
          }}
        >
          <div className="relative">
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 blur-xl bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
            />
            {/* Checkmark Icon */}
            <motion.svg
              width={80}
              height={80}
              viewBox="0 0 100 100"
              initial="hidden"
              animate="visible"
              className="relative z-10 dark:drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]"
            >
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                stroke="rgb(16 185 129)"
                variants={draw}
                custom={0}
                style={{
                  strokeWidth: 4,
                  strokeLinecap: "round",
                  fill: "transparent",
                }}
              />
              <motion.path
                d="M30 50L45 65L70 35"
                stroke="rgb(16 185 129)"
                variants={draw}
                custom={1}
                style={{
                  strokeWidth: 4,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "transparent",
                }}
              />
            </motion.svg>
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.h2
          className="text-lg text-zinc-100 dark:text-zinc-900 tracking-tighter font-semibold uppercase"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          Registration Successful!
        </motion.h2>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Close
        </button>
      </CardContent>
    </Card>
  );
}