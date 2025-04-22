import { useState, useRef } from "react";

export function Popover({ children, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  return (
    <div className={`relative ${className}`} ref={popoverRef}>
      {/* ✅ Ensure children is correctly used */}
      {typeof children === "function" ? children({ isOpen, setIsOpen }) : children}
    </div>
  );
}

export function PopoverTrigger({ children, onClick }) {
  return (
    <button onClick={onClick} className="p-2 border rounded-md">
      {children}
    </button>
  );
}

export function PopoverContent({ children, isOpen, className = "" }) {
  return isOpen ? (
    <div className={`absolute mt-2 bg-white shadow-md rounded-md p-4 ${className}`}>
      {children}
    </div>
  ) : null;
}
