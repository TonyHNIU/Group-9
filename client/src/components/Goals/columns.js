/*const tablecolumns = [
    {
        Header: "Goal",
        accessor: "Goal"
    },
    {
        Header: "Very High Contribution",
        accessor: "Very_High_Contribution"
    },
    {
        Header: "High Contribution",
        accessor: "High_Contribution"
    }]

module.exports = tablecolumns*/

const tablecolumns = [
    {
        field: 'id', 
        headerName: 'ID',  
        width: 95 
    },
    {
        field: 'Goal', 
        headerName: 'Goal',
        width: 250,
        whiteSpace: 'normal',
        wordBreak: 'break-word',
    },
    {
        field: "VeryHighContribution",
        headerName: "Very High Contribution",
        width: 200
    },
    {
        field: "HighContribution",
        headerName: "High Contribution",
        width: 200
    }];

module.exports = tablecolumns