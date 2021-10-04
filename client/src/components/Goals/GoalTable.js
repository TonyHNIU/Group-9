import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import tableColumns from './columns.js';
import goalData from './goaldata.js';

const {data} = {
    data: {columns:{tableColumns},
        rows: {goalData}}
  }

export default function GoalTable() {
    let activitiesList = '';
    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={goalData}
                columns={tableColumns}
                pageSize={25}
                rowsPerPageOptions={[25]}
                checkboxSelection
                hideFooterPagination
                onSelectionModelChange={(ids) => {
                    activitiesList = '';
                    const selectedIDs = new Set(ids);
                    const selectedRowData = data.rows.goalData.filter((row) =>
                      selectedIDs.has(row.id)
                    );
                    selectedRowData.forEach(goal => 
                        goal.VeryHighContribution.forEach(activity => 
                            activity.VeryHighContribution.forEach(vhActivity =>
                                {if (!activitiesList.includes(vhActivity)){
                                    activitiesList += (vhActivity, ' ');
                                }}),
                                activity.HighContribution.forEach(hActivity =>
                                    {if (!activitiesList.includes(hActivity)){
                                        activitiesList += (hActivity, ' ');
                                    }})
                            )
                        )
                    }
                }       
            />
            <p>{activitiesList}</p>
        </div>
    );
}

