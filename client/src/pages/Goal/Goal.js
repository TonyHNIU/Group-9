import React, { useEffect } from 'react'
import { Container, Grow, Paper } from '@material-ui/core'
import List from '../../components/Goal/Table/List'

import { getGoals } from '../../actions/goal'
import { useDispatch } from 'react-redux'

const Goal = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGoals())
  }, [dispatch])

  return (
    <Container maxWidth='lg'>
      <Grow in>
        <Container>
          <Paper>
            <List />
          </Paper>
        </Container>
      </Grow>
    </Container>
  )
}

export default Goal
