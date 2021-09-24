import React, { useState } from 'react'
import { Collapse, TableBody, IconButton, TableCell, TableRow, Table, TableHead } from '@material-ui/core'

import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined'
import { Box } from '@mui/material'

const SubList = ({ goal }) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <TableRow>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <ArrowDropUpOutlinedIcon /> : <ArrowDropDownOutlinedIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {goal.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size='small'>
                <TableHead>
                  <TableCell>Activity/Strategy with Very High contribution</TableCell>
                  <TableCell>Activity/Strategy with High contribution</TableCell>
                </TableHead>
                <TableBody>
                  <TableCell>{goal.veryHigh}</TableCell>
                  <TableCell>{goal.high}</TableCell>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </div>
  )
}

export default SubList
