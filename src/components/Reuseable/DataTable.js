import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Items' },
  { field: 'firstName', headerName: 'Quantity' },
  { field: '', headerName: '' },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
];

export default function DataTable() {
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
    </div>
  );
}
