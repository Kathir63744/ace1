export function Card({ children, className }) {
  return <div className={`rounded-lg border bg-white p-4 shadow-sm ${className}`}>{children}</div>;
}

export function CardHeader({ children, className }) {
  return <div className={`border-b pb-2 ${className}`}>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={`py-2 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className }) {
  return <div className={`border-t pt-2 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className }) {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
}

export function CardDescription({ children, className }) {
  return <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>;
}
