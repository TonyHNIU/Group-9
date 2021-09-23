import React from 'react'
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from "../components/Goals/GoalTable.js"


function Goals() {
    return (
        ReactDOM.render(
            <StyledEngineProvider injectFirst>
              <Demo />
            </StyledEngineProvider>,
            document.querySelector("#root")
          )
    )
}

export default Goals;