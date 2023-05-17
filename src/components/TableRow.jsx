import React from "react";

const TableRow = ({ columns, row, handleCellEdit, visibleColumns }) => {
  const renderInput = (column) => {
    const type = column.type === "number" ? "number" : "text";
    return (
      <input
        type={type}
        value={row[column.id]}
        onChange={(e) => {
          const value =
            column.type === "number"
              ? parseInt(e.target.value)
              : e.target.value;
          handleCellEdit(row.id, column.id, value);
        }}
      />
    );
  };

  return (
    <tr>
      {columns.map((column) => (
        <td
          key={column.id}
          style={{
            borderBottom: "1px solid #D3D3D3",
            padding: "10px",
            textAlign: "center",
            visibility: visibleColumns.includes(column.id)
              ? "visible"
              : "hidden",
          }}
        >
          {visibleColumns.includes(column.id)
            ? column.editable
              ? renderInput(column)
              : row[column.id]
            : null}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
