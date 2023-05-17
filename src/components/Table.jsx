import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { tableData } from "../data/tableData";

function Table(props) {
  const { data } = props;
  const [visibleColumns, setVisibleColumns] = useState(
    data.columns.map((column) => column.id)
  );
  const [tableDataState, setTableDataState] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("tableData");
    if (localData) {
      setTableDataState(JSON.parse(localData));
    } else {
      setTableDataState(data.data);
    }
  }, [data.data]);

  const handleColumnToggle = (id) => {
    setVisibleColumns((prevVisibleColumns) => {
      if (prevVisibleColumns.includes(id)) {
        return prevVisibleColumns.filter((columnId) => columnId !== id);
      } else {
        return [...prevVisibleColumns, id];
      }
    });
  };

  const handleCellEdit = (id, columnId, value) => {
    setTableDataState((prevState) => {
      const newData = [...prevState];
      const rowIndex = newData.findIndex((row) => row.id === id);
      newData[rowIndex][columnId] = value;
      return newData;
    });
  };

  const handleDataSave = () => {
    localStorage.setItem("tableData", JSON.stringify(tableDataState));
  };

  const filteredData = tableDataState.map((row) => {
    return Object.keys(row).reduce((obj, key) => {
      if (visibleColumns.includes(key) || key === "id") {
        obj[key] = row[key];
      }
      return obj;
    }, {});
  });

  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "43%",
        backgroundColor: "#f2f2f2",
        fontFamily: "Arial, sans-serif",
        textAlign: "left",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <TableHeader
        columns={data.columns}
        handleColumnToggle={handleColumnToggle}
        getButtonLabel={(column) =>
          visibleColumns.includes(column.id) ? "Hide" : "Show"
        }
      />
      <tbody>
        {filteredData.map((row) => (
          <TableRow
            key={row.id}
            row={row}
            columns={data.columns}
            visibleColumns={visibleColumns}
            handleCellEdit={handleCellEdit}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={data.columns.length}>
            <button
              onClick={handleDataSave}
              style={{
                cursor: "pointer",
                marginLeft: "6px",
                padding: "4px 8px",
                borderRadius: "4px",
                marginTop: "8px",
                backgroundColor: "white",
                color: "black",
                marginBottom: "10px",
              }}
            >
              Save
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;
