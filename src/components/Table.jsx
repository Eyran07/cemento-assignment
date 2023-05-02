import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { tableData } from "../data/tableData";

function Table(props) {
  const { data } = props;

  const handleColumnToggle = (columnId) => {
    const updatedColumns = data.columns.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          hidden: !column.hidden,
        };
      }
      return column;
    });
  
    const updatedData = data.data.map((row) => {
      const updatedRow = { ...row };
      updatedRow.cells = updatedRow.cells.map((cell) => {
        const updatedCell = { ...cell };
        const correspondingColumn = data.columns.find(
          (column) => column.id === cell.columnId
        );
        if (correspondingColumn && correspondingColumn.hidden) {
          updatedCell.hidden = true;
        } else {
          updatedCell.hidden = false;
        }
        return updatedCell;
      });
      return updatedRow;
    });
  
    const updatedTableData = {
      ...data,
      columns: updatedColumns,
      data: updatedData,
    };
  
    console.log(updatedTableData);
  };
  
  

  return (
    <table>
      <TableHeader columns={data.columns} handleColumnToggle={handleColumnToggle} />
      <tbody>
        {data.data.map((row) => (
          <TableRow key={row.id} row={row} columns={data.columns} />
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.shape({
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        ordinalNo: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        width: PropTypes.number,
      })
    ).isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

Table.defaultProps = {
  data: tableData, // set default data to external file
};

export default Table;
