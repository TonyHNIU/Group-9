import React from 'react'
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import GoalTable from "../components/Goals/GoalTable.js"


function Goals() {
  return (
    ReactDOM.render(
      <StyledEngineProvider injectFirst>
      <GoalTable />
      </StyledEngineProvider>,
      document.querySelector("#root")
    )
  )
}

export default Goals;