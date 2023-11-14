// ParentForm.tsx
import React from "react";
import AppDataGrid from "./AppDataGrid";
import { type GridColDef } from "@mui/x-data-grid";

const Keywords = () => {
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

  const rows = [
    {
      id: 1,
      keywordNo: "12345678",
      keywordName: "Contract Agreement",
      status: "Active",
      dataType: "Numberic",
      lastModified: "2023-01-01",
      modifiedBy: "User 1",
      dateCreated: "2022-01-01",
      createdBy: "User 2",
    },
    {
      id: 2,
      keywordNo: "12345678",
      keywordName: "Contract Agreement",
      status: "Active",
      dataType: "Numberic",
      lastModified: "2023-02-15",
      modifiedBy: "User 3",
      dateCreated: "2022-02-20",
      createdBy: "User 4",
    },
    {
      id: 3,
      keywordNo: "12345678",
      keywordName: "Contract Agreement",
      status: "Active",
      dataType: "Numberic",
      lastModified: "2023-03-05",
      modifiedBy: "User 2",
      dateCreated: "2022-03-10",
      createdBy: "User 1",
    },
    {
      id: 4,
      keywordNo: "12345678",
      keywordName: "Contract Agreement",
      status: "Active",
      dataType: "Numberic",
      lastModified: "2023-04-12",
      modifiedBy: "User 4",
      dateCreated: "2022-04-22",
      createdBy: "User 3",
    },
    {
      id: 5,
      keywordNo: "12345678",
      keywordName: "Contract Agreement",
      status: "Active",
      dataType: "Numberic",
      lastModified: "2023-05-18",
      modifiedBy: "User 5",
      dateCreated: "2022-05-25",
      createdBy: "User 6",
    },
  ];

  return (
    <div style={{ marginTop: "100px" }}>
      <AppDataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default Keywords;
