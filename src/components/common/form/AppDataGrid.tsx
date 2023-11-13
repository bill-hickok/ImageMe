import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface DocumentGridProps {
  rows: any[]; // Replace 'any[]' with the actual type of your data
}

const columns: GridColDef[] = [
  { field: 'docTypeNo', headerName: 'Doc Type No.', flex: 1, headerClassName: 'super-app-theme--header', cellClassName: 'bold-cell',  },
  { field: 'docTypeName', headerName: 'Doc Type Name', flex: 1, headerClassName: 'header-cell', cellClassName: 'bold-cell' },
  { field: 'status', headerName: 'Status', flex: 1, headerClassName: 'header-cell', cellClassName: 'bold-cell' },
  { field: 'keywords', headerName: 'Keywords', flex: 1, headerClassName: 'header-cell', cellClassName: 'bold-cell' },
  { field: 'lastModified', headerName: 'Last Modified', flex: 1, headerClassName: 'header-cell', cellClassName: 'bold-cell' },
  { field: 'modifiedBy', headerName: 'Modified by', flex: 1, headerClassName: 'header-cell', cellClassName: 'bold-cell' },
  { field: 'dateCreated', headerName: 'Date Created', flex: 1, headerClassName: 'header-cell', cellClassName: 'bold-cell' },
  { field: 'createdBy', headerName: 'Created by', flex: 1, headerClassName: 'header-cell', cellClassName: 'bold-cell' },
];

const AppDataGrid: React.FC<DocumentGridProps> = ({ rows }) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pagination/>
    </div>
  );
};

export default AppDataGrid;
