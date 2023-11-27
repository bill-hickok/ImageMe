// ParentForm.tsx
import React, { useEffect, useState } from "react";
import AppDataGrid from "./AppDataGrid";
import { type GridColDef } from "@mui/x-data-grid";
import { type CatBreed, CatBreedsAPI } from "../data/cat-breeds";

const CatBreeds = () => {
  const [rows, setRows] = useState<CatBreed[]>([]);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Breed Name",
      flex: 1,
      headerClassName: "super-app-theme--header",
      cellClassName: "bold-cell",
    },
    {
      field: "temperament",
      headerName: "Temperament",
      flex: 1,
      headerClassName: "header-cell",
      cellClassName: "bold-cell",
    },
    {
      field: "origin",
      headerName: "Origin",
      flex: 1,
      headerClassName: "header-cell",
      cellClassName: "bold-cell",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      headerClassName: "header-cell",
      cellClassName: "bold-cell",
    },
  ];

  useEffect(() => {
    CatBreedsAPI.getAll()
      .then((results) => setRows(results))
      .catch((e) => console.error(e));
  }, [setRows]);

  return (
    <div className="my-4" style={{ marginTop: "100px" }}>
      <AppDataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default CatBreeds;
