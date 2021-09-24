import React from 'react'
import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Typography, CircularProgress, Grid } from '@material-ui/core'

import { useSelector } from 'react-redux'
import SubList from './SubList'

const List = () => {
  const goals = useSelector((state) => state.goals)

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography align='center' variant='h6'>Goals</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!goals.length
              ? <CircularProgress />
              : (<Grid>{goals.map((goal) => (<Grid key={goal}><SubList goal={goal} /></Grid>))}</Grid>)}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default List