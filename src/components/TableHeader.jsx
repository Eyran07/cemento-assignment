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
          <th key={column.id} style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
            <div className="column-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>{column.title}</span>
              <button onClick={() => {
                toggleColumnVisibility(column.id);
                handleColumnToggle(column.id, !hiddenColumns.includes(column.id));
              }} style={{ cursor: 'pointer', padding: '4px 8px', borderRadius: '4px', background: '#ccc', borderRadius:'5px', marginLeft: '8px' }}>
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

