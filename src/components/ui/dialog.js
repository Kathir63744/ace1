"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const Dialog = ({ children, ...props }) => {
  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>;
};

const DialogTrigger = ({ children, ...props }) => {
  return <DialogPrimitive.Trigger {...props}>{children}</DialogPrimitive.Trigger>;
};

const DialogContent = ({ children, className, ...props }) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50" />
      <DialogPrimitive.Content
        className={cn(
          "fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-3 top-3">✖</DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

const DialogTitle = ({ children, className, ...props }) => {
  return (
    <DialogPrimitive.Title className={cn("text-lg font-medium text-center", className)} {...props}>
      {children}
    </DialogPrimitive.Title>
  );
};

const DialogDescription = ({ children, className, ...props }) => {
  return (
    <DialogPrimitive.Description className={cn("text-sm text-gray-500", className)} {...props}>
      {children}
    </DialogPrimitive.Description>
  );
};

// ✅ Export only once to avoid duplication
export { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription };
