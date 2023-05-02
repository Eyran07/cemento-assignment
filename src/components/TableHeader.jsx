import React from "react";

const TableHeader = ({ columns, handleColumnToggle }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.id}>
            <div className="column-header">
              <span>{column.title}</span>
              <button onClick={() => handleColumnToggle(column.id)}>
                {column.hidden ? "Show" : "Hide"}
              </button>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
