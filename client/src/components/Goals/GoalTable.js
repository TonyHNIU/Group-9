import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import tablecolumns from './columns.js';
import goaldata from './goaldata.js';

export default function goalTable() {
    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={goaldata}
                columns={tablecolumns}
                pageSize={11}
                rowsPerPageOptions={[11]}
                checkboxSelection
                multiline
        />
        </div>
    );
}

