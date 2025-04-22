"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

export default function AccordionItem({ week, topic, hours, details, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-4 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full p-6 text-left rounded-lg transition-all duration-300 ${
          isOpen ? "bg-indigo-50 border border-indigo-100" : "bg-white hover:bg-gray-50 border border-gray-100"
        }`}
      >
        <div className="flex items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full mr-4">
            <span className="text-indigo-600 font-bold">{week}</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{topic}</h3>
            <p className="text-gray-600">{hours} hours</p>
          </div>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5 text-indigo-600" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-t-0 border-gray-200 rounded-b-lg"
          >
            <div className="p-6 pt-2">
              <ul className="space-y-3">
                {details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}