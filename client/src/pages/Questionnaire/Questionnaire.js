import React, { useEffect } from 'react'
import { Container, Grow, Paper } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getPosts } from '../../actions/questionnaire'
// import Posts from '../../components/Questionnaire/Posts/Posts'
import Form from '../../components/Questionnaire/Form/Form'

const Questionnaire = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxWidth='lg'>
      <Grow in>
        <Container>
          <Paper>
            <Form />
          </Paper>
        </Container>
      </Grow>
    </Container>
  )
}

export default Questionnaire
