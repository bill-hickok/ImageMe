// ParentForm.tsx
import React, { useEffect, useState } from "react";
import AppDataGrid from "./AppDataGrid";
import { type GridColDef } from "@mui/x-data-grid";
import { KeywordAPI } from "../data/keywords";

const Keywords = () => {
  const [rows, setRows] = useState<Keyword[]>([]);
  const columns: GridColDef[] = [
    {
      field: "keywordNo",
      headerName: "Keyword No.",
      flex: 1,
      headerClassName: "super-app-theme--header",
      cellClassName: "bold-cell",
    },
    {
      field: "keywordName",
      headerName: "Keyword Name",
      flex: 1,
      headerClassName: "header-cell",
      cellClassName: "bold-cell",
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      headerClassName: "header-cell",
      cellClassName: "bold-cell",
    },
    {
      field: "dataType",
      headerName: "Date Type",
      flex: 1,
      headerClassName: "header-cell",
      cellClassName: "bold-cell",
    },
    {
      field: "lastModified",
      headerName: "Last Modified",
      flex: 1,
      headerClassName: "header-cell",
      cellClassName: "bold-cell",
    },
    {
      field: "modifiedBy",
      headerName: "Modified by",
      flex: 1,
      headerClassName: "header-cell",
      cellClassName: "bold-cell",
    },
    {
      field: "dateCreated",
      headerName: "Date Created",
      flex: 1,
      headerClassName: "header-cell",
      cellClassName: "bold-cell",
    },
    {
      field: "createdBy",
      headerName: "Created by",
      flex: 1,
      headerClassName: "header-cell",
      cellClassName: "bold-cell",
    },
  ];

  useEffect(() => setRows(KeywordAPI.getAll()), [setRows]);

  return (
    <div style={{ marginTop: "100px" }}>
      <AppDataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default Keywords;
