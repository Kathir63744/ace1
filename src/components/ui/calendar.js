import { useState } from "react"; // ✅ Import useState
import { format } from "date-fns"; // ✅ Import format from date-fns

export function Calendar({ selectedDate, onSelect, className = "" }) {
  const [date, setDate] = useState(selectedDate || new Date());

  const handleDateChange = (event) => {
    const newDate = new Date(event.target.value);
    setDate(newDate);
    if (onSelect) {
      onSelect(newDate);
    }
  };

  return (
    <div className={`p-2 border rounded-md ${className}`}>
      <input
        type="date"
        value={format(date, "yyyy-MM-dd")}
        onChange={handleDateChange}
        className="p-2 border rounded-md"
      />
    </div>
  );
}
