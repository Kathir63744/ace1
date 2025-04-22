"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

// VisuallyHidden component for hiding content from the display but keeping it accessible to screen readers
const VisuallyHidden = ({ children }) => {
  return <span className="sr-only">{children}</span>;
};

VisuallyHidden.propTypes = {
  children: PropTypes.node.isRequired,
};

const Dialog = ({ children, ...props }) => {
  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>;
};

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
};

const DialogTrigger = ({ children, ...props }) => {
  return <DialogPrimitive.Trigger {...props}>{children}</DialogPrimitive.Trigger>;
};

DialogTrigger.propTypes = {
  children: PropTypes.node.isRequired,
};

const DialogContent = ({ children, className, title, ...props }) => {
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
        {title && (
          // Visually hide the title but keep it for screen readers
          <VisuallyHidden>
            <DialogPrimitive.Title className="text-lg font-medium text-center">{title}</DialogPrimitive.Title>
          </VisuallyHidden>
        )}
        {children}
        <DialogPrimitive.Close className="absolute right-3 top-3">✖</DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

DialogContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

const DialogTitle = ({ children, className, ...props }) => {
  return (
    <DialogPrimitive.Title className={cn("text-lg font-medium text-center", className)} {...props}>
      {children}
    </DialogPrimitive.Title>
  );
};

DialogTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const DialogDescription = ({ children, className, ...props }) => {
  return (
    <DialogPrimitive.Description className={cn("text-sm text-gray-500", className)} {...props}>
      {children}
    </DialogPrimitive.Description>
  );
};

DialogDescription.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// ✅ Export only once to avoid duplication
export { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription };
