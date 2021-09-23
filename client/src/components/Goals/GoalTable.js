import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import tablecolumns from './columns.js';
import goaldata from './goaldata.js';

export default function GoalTable() {
    const [select, setSelection] = React.useState([]);
    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={goaldata}
                columns={tablecolumns}
                pageSize={25}
                rowsPerPageOptions={[25]}
                checkboxSelection
                hideFooterPagination
                onSelectionModelChange={(newSelection) => {
                    setSelection(newSelection.goaldata);
                    console.log(newSelection);
                    }
                }
            />
        </div>
    );
}

