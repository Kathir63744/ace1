import React from "react";

const Sidebar = ({ children }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      {children}
    </aside>
  );
};

export default Sidebar;
