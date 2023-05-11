import React, { useState } from "react";

const TableHeader = ({ columns, handleColumnToggle }) => {
  const [hiddenColumns, setHiddenColumns] = useState(
    columns.filter((column) => column.hidden).map((column) => column.id)
  );

  const toggleColumnVisibility = (id) => {
    setHiddenColumns((prevHiddenColumns) => {
      if (prevHiddenColumns.includes(id)) {
        return prevHiddenColumns.filter((columnId) => columnId !== id);
      } else {
        return [...prevHiddenColumns, id];
      }
    });
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.id}>
            <div className="column-header">
              <span>{column.title}</span>
              <button onClick={() => {
                toggleColumnVisibility(column.id);
                handleColumnToggle(column.id, !hiddenColumns.includes(column.id));
              }}>
                {hiddenColumns.includes(column.id) ? "Show" : "Hide"}
              </button>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
