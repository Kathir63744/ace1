export function Select({ children, className = "", ...props }) {
    return (
      <select className={`border border-gray-300 rounded-md p-2 ${className}`} {...props}>
        {children}
      </select>
    );
  }
  
  export function SelectItem({ value, children }) {
    return <option value={value}>{children}</option>;
  }
  
  export function SelectTrigger({ children, className = "" }) {
    return <div className={`p-2 border rounded-md ${className}`}>{children}</div>;
  }
  
  export function SelectValue({ value }) {
    return <span>{value}</span>;
  }
  
  export function SelectContent({ children }) {
    return <div className="absolute mt-1 bg-white shadow-md rounded-md">{children}</div>;
  }
  