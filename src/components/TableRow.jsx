import React from "react";

const TableRow = ({ columns, row, handleCellEdit }) => {
  return (
    <tr>
      {columns.map((column) => (
        <td key={column.id}>
          {column.editable ? (
            <input
              type="text"
              value={row[column.id]}
              onChange={(e) => handleCellEdit(row.id, column.id, e.target.value)}
            />
          ) : (
            row[column.id]
          )}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
