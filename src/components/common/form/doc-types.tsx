// ParentForm.tsx
import React, { useEffect, useState } from "react";
import AppDataGrid from "./AppDataGrid";
import { type GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { DocTypesAPI, type DocType } from "../data/doc-types";

const DocTypes = () => {
  const [rows, setRows] = useState<DocType[]>([]);

  const columns: GridColDef[] = [
    {
      field: "docTypeNo",
      headerName: "Doc Type No.",
      flex: 1,
      headerClassName: "super-app-theme--header",
      cellClassName: "bold-cell",
    },
    {
      field: "docTypeName",
      headerName: "Doc Type Name",
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
      field: "keywords",
      headerName: "Keywords",
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

  useEffect(() => setRows(DocTypesAPI.getAll()), [setRows]);

  return (
    <div className="my-4" style={{ marginTop: "100px" }}>
      <Button variant="contained">Add New Doc Type +</Button>
      <AppDataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default DocTypes;
