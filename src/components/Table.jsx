import React, { useState } from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { tableData } from "../data/tableData";

function Table(props) {
  const { data } = props;
  const [visibleColumns, setVisibleColumns] = useState(
    data.columns.map((column) => column.id)
  );

  const handleColumnToggle = (id) => {
    setVisibleColumns((prevVisibleColumns) => {
      if (prevVisibleColumns.includes(id)) {
        return prevVisibleColumns.filter((columnId) => columnId !== id);
      } else {
        return [...prevVisibleColumns, id];
      }
    });
  };

  const visibleData = data.data.map((row) => {
    return Object.keys(row).reduce((obj, key) => {
      if (visibleColumns.includes(key)) {
        obj[key] = row[key];
      }
      return obj;
    }, {});
  });

  return (
    <table>
      <TableHeader columns={data.columns} handleColumnToggle={handleColumnToggle} />
      <tbody>
        {visibleData.map((row) => (
          <TableRow key={row.id} row={row} columns={data.columns} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
