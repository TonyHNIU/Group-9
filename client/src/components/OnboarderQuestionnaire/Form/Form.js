import React, { useState } from 'react'
import { Button, Typography, Paper } from '@material-ui/core'
import { InputLabel, Select, FormControl } from '@mui/material'
import { useDispatch } from 'react-redux'
import Popup from '../Dialog/Dialog'
import * as AiIcons from 'react-icons/ai'

import useStyles from './styles'
import { createPost } from '../../../actions/questionnaire'

const Form = () => {
  const [postData, setPostData] = useState({ oquestion1: '', oquestion2: '', oquestion3: '', oquestion4: '', oquestion5: '', oquestion6: '' })
  // const [select, setSelect] = useState()
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(createPost(postData))
  }

  const clear = () => {
    setPostData({ oquestion1: '', oquestion2: '', oquestion3: '', oquestion4: '', oquestion5: '', oquestion6: '' })
  }

  const [openPopup, setOpenPopup] = useState(false)

  return (
    <>
      <Paper className={classes.paper}>
        <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant='h6'>Organisational Information</Typography>
          <Button
            className={classes.newButton}
            variant='outlined'
            onClick={() => setOpenPopup(true)}
          >
            <AiIcons.AiOutlineUnorderedList />
          </Button>
          <FormControl fullWidth>
            <InputLabel id='oquestion1'>1. How skilled are you with React?</InputLabel>
            <Select variant='outlined' label='1. How skilled are you with React?' labelId='oquestion1' />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='oquestion2'>2. How skilled are you with TDD?</InputLabel>
            <Select variant='outlined' label='2. How skilled are you with TDD?' labelId='oquestion2' />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='oquestion3'>3. How skilled are you with TDD?</InputLabel>
            <Select variant='outlined' label='3. How skilled are you with TDD?' labelId='oquestion3' />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='oquestion4'>4. How skilled are you with Mob Programming?</InputLabel>
            <Select variant='outlined' label='4. How skilled are you with Mob Programming?' labelId='oquestion4' />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='oquestion5'>5. How skilled are you with DevOps?</InputLabel>
            <Select variant='outlined' label='5. How skilled are you with DevOps?' labelId='oquestion5' />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='oquestion6'>6. How skilled are you with CI/CD?</InputLabel>
            <Select variant='outlined' label='6. How skilled are you with CI/CD?' labelId='oquestion6' />
          </FormControl>

          <Button className={classes.buttonSubmit} variant='contained' color='primary' size='small' type='submit' fullWidth>Submit</Button>
          <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} />
    </>
  )
}

export default Form
