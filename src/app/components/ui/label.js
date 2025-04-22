export function Label({ htmlFor, className, children }) {
    return (
      <label htmlFor={htmlFor} className={`text-sm font-medium ${className}`}>
        {children}
      </label>
    );
  }
  