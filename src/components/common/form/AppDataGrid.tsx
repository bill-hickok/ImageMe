import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface DocumentGridProps {
  rows: any[]; // Replace 'any[]' with the actual type of your data
  columns: GridColDef[];
}

const AppDataGrid: React.FC<DocumentGridProps> = ({ rows, columns }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pagination />
    </div>
  );
};

export default AppDataGrid;
