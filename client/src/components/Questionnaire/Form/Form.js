import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { InputLabel, MenuItem, Select, FormControl } from '@mui/material'
import { useDispatch } from 'react-redux'
import Popup from '../Dialog/Dialog'
import * as AiIcons from 'react-icons/ai'

import useStyles from './styles'
import { createPost } from '../../../actions/questionnaire'

const Form = () => {
  const [postData, setPostData] = useState({ question1: '', question2: '', question3: '', question4: '', question5: '', question6: '', question7: '', question8: '', question9: '', question10: '', question11: '', question12: '', question13: '', question14: '', question15: '', question151: '', question16: '', question17: '', question18: '', question181: '', question182: '', question183: '', question184: '', question185: '', question19: '', question20: '', question21: '', question22: '', question23: '', question24: '', question25: '', question251: '', question26: '', question27: '', question271: '', question28: '', question281: '' })
  const [select, setSelect] = useState()
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(createPost(postData))
  }

  const clear = () => {
    setPostData({ question1: '', question2: '', question3: '', question4: '', question5: '', question6: '', question7: '', question8: '', question9: '', question10: '', question11: '', question12: '', question13: '', question14: '', question15: '', question151: '', question16: '', question17: '', question18: '', question181: '', question182: '', question183: '', question184: '', question185: '', question19: '', question20: '', question21: '', question22: '', question23: '', question24: '', question25: '', question251: '', question26: '', question27: '', question271: '', question28: '', question281: '' })
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
          <TextField name='question1' variant='outlined' label='1.Who is the Manager that the team manager reports to?' fullWidth value={postData.question1} onChange={(e) => setPostData({ ...postData, question1: e.target.value })} />
          <TextField name='question2' variant='outlined' label='2.Where is an organisational chart available?' fullWidth value={postData.question2} onChange={(e) => setPostData({ ...postData, question2: e.target.value })} />
          <TextField name='question3' variant='outlined' label='3.Is there an Induction program for new employees? If so how/when can this be accessed?' fullWidth value={postData.question3} onChange={(e) => setPostData({ ...postData, question3: e.target.value })} />
          <TextField name='question4' variant='outlined' label='4.What funds are available for the onboarder to attend formal courses?' fullWidth value={postData.question4} onChange={(e) => setPostData({ ...postData, question4: e.target.value })} />
          <TextField name='question5' variant='outlined' label='5.Is there a qualified suitable mentor available for the new employee?' fullWidth value={postData.question5} onChange={(e) => setPostData({ ...postData, question5: e.target.value })} />
          <TextField name='question6' variant='outlined' label='6.How can the organisational vision best be understood?' fullWidth value={postData.question6} onChange={(e) => setPostData({ ...postData, question6: e.target.value })} />
          <TextField name='question7' variant='outlined' label='7.How can the product/service offered by the organisation best be understood by a new employee (video, marketing material, market segments etc)' fullWidth value={postData.question7} onChange={(e) => setPostData({ ...postData, question7: e.target.value })} />
          <TextField name='question8' variant='outlined' label='8.What tools are used for company wide communications?' fullWidth value={postData.question8} onChange={(e) => setPostData({ ...postData, question8: e.target.value })} />
          <TextField name='question9' variant='outlined' label='9.Is there a company wide knowledge base?' fullWidth value={postData.question9} onChange={(e) => setPostData({ ...postData, question9: e.target.value })} />
          <Typography variant='h6'>Team Information</Typography>
          <TextField name='question10' variant='outlined' label='1.Who is the team leader?' fullWidth value={postData.question10} onChange={(e) => setPostData({ ...postData, question10: e.target.value })} />
          <TextField name='question11' variant='outlined' label='2.What are the main tasks expected of the new team member?' fullWidth value={postData.question11} onChange={(e) => setPostData({ ...postData, question11: e.target.value })} />
          <TextField name='question12' variant='outlined' label='3.What are the main programming languages the team uses?' fullWidth value={postData.question12} onChange={(e) => setPostData({ ...postData, question12: e.target.value })} />
          <TextField name='question13' variant='outlined' label='4.What frameworks are mainly used by the team?' fullWidth value={postData.question13} onChange={(e) => setPostData({ ...postData, question13: e.target.value })} />
          <TextField name='question14' variant='outlined' label='5.What version control and code sharing mechanism is used by the team to get access to the source code?' fullWidth value={postData.question14} onChange={(e) => setPostData({ ...postData, question14: e.target.value })} />
          <TextField name='question15' variant='outlined' label='6.What documentation about the source code design and structure is available and how can it be accessed and added to?' fullWidth value={postData.question15} onChange={(e) => setPostData({ ...postData, question15: e.target.value })} />
          <TextField name='question151' variant='outlined' label='a.What tools are used by the team for this?' fullWidth value={postData.question151} onChange={(e) => setPostData({ ...postData, question151: e.target.value })} />
          <TextField name='question16' variant='outlined' label='7.What database is used by the team?' fullWidth value={postData.question16} onChange={(e) => setPostData({ ...postData, question16: e.target.value })} />
          <FormControl fullWidth>
            <InputLabel id='question17'>8.What are the main coding and testing techniques regularly used by the team</InputLabel>
            <Select variant='outlined' label='8.What are the main coding and testing techniques regularly used by the team' labelId='question17' value={select} onChange={(e) => { setSelect(e.target.value); setPostData({ ...postData, question17: e.target.value }) }}>
              <MenuItem value='continuousintegration'>a. Continuous Integration</MenuItem>
              <MenuItem value='continuousdeployment'>b. Continuous Deployment</MenuItem>
              <MenuItem value='devops'>c. DevOps</MenuItem>
              <MenuItem value='test-drivendevelopment'>d. Test-driven Development</MenuItem>
              <MenuItem value='behaviourdrivendevelopment'>e. Behaviour Driven Development</MenuItem>
              <MenuItem value='pairprogramming'>f. Pair programming</MenuItem>
              <MenuItem value='mobprogramming'>g. Mob programming</MenuItem>
              <MenuItem value='featureflags'>h. Feature flags</MenuItem>
              <MenuItem value='Infrastructure as code'>i. Infrastructure as code</MenuItem>
              <MenuItem value='Static code analysis'>j. Static code analysis</MenuItem>
              <MenuItem value='Other…'>k. Other…</MenuItem>
            </Select>
          </FormControl>
          <TextField name='question18' variant='outlined' label='9.What tools are used by the team to support coding and testing?' fullWidth value={postData.question18} onChange={(e) => setPostData({ ...postData, question18: e.target.value })} />
          <TextField name='question181' variant='outlined' label='a.What IDE? (eg Visual Studio)' fullWidth value={postData.question181} onChange={(e) => setPostData({ ...postData, question181: e.target.value })} />
          <TextField name='question182' variant='outlined' label='b.What version control? (eg GitHub)' fullWidth value={postData.question182} onChange={(e) => setPostData({ ...postData, question182: e.target.value })} />
          <TextField name='question183' variant='outlined' label='c.What test runners? (e.g. Jest, Cypress)' fullWidth value={postData.question183} onChange={(e) => setPostData({ ...postData, question183: e.target.value })} />
          <TextField name='question184' variant='outlined' label='d.What continuous integration servers (e.g. CircleCI)' fullWidth value={postData.question184} onChange={(e) => setPostData({ ...postData, question184: e.target.value })} />
          <TextField name='question185' variant='outlined' label='e.What Deployment tools (eg Octopus, Terraform, Kubernetes, feature flags)' fullWidth value={postData.question185} onChange={(e) => setPostData({ ...postData, question185: e.target.value })} />
          <FormControl fullWidth>
            <InputLabel id='question19'>10.What are the main architectural styles used in the code base?</InputLabel>
            <Select variant='outlined' label='10.What are the main architectural styles used in the code base?' labelId='question19' value={select} onChange={(e) => { setSelect(e.target.value); setPostData({ ...postData, question19: e.target.value }) }}>
              <MenuItem value='layered'>a. Layered</MenuItem>
              <MenuItem value='eventdriven'>b. Event Driven</MenuItem>
              <MenuItem value='microservices'>c. Microservices</MenuItem>
              <MenuItem value='other'>d. other</MenuItem>
            </Select>
          </FormControl>
          <TextField name='question20' variant='outlined' label='11.What unit testing and other testing and quality assurance standards (e.g. code reviews) are expected by the team?' fullWidth value={postData.question20} onChange={(e) => setPostData({ ...postData, question20: e.target.value })} />
          <FormControl fullWidth>
            <InputLabel id='question21'>12.What Agile development process is adopted by the team?</InputLabel>
            <Select variant='outlined' label='12.What Agile development process is adopted by the team?' labelId='question21' value={select} onChange={(e) => { setSelect(e.target.value); setPostData({ ...postData, question21: e.target.value }) }}>
              <MenuItem value='Scrum'>a. Scrum</MenuItem>
              <MenuItem value='Kanban'>b. Kanban</MenuItem>
              <MenuItem value='Other'>c. Other</MenuItem>
            </Select>
          </FormControl>
          <TextField name='question22' variant='outlined' label='13.What planning techniques are used by the team?' fullWidth value={postData.question22} onChange={(e) => setPostData({ ...postData, question22: e.target.value })} />
          <TextField name='question23' variant='outlined' label='14.How is progress monitored?' fullWidth value={postData.question23} onChange={(e) => setPostData({ ...postData, question23: e.target.value })} />
          <TextField name='question24' variant='outlined' label='15.What tools are used by the team to support the planning and monitoring process? (eg Jira)' fullWidth value={postData.question24} onChange={(e) => setPostData({ ...postData, question24: e.target.value })} />
          <TextField name='question25' variant='outlined' label='16.How do the team keep in touch and communicate' fullWidth value={postData.question25} onChange={(e) => setPostData({ ...postData, question25: e.target.value })} />
          <TextField name='question251' variant='outlined' label='a.What tools are used to support team communication (e.g. Slack, Discord, MS teams)' fullWidth value={postData.question251} onChange={(e) => setPostData({ ...postData, question251: e.target.value })} />
          <TextField name='question26' variant='outlined' label='17.How autonomous is the team?' fullWidth value={postData.question26} onChange={(e) => setPostData({ ...postData, question26: e.target.value })} />
          <TextField name='question27' variant='outlined' label='18.How much of the team work is done in a virtual environment?' fullWidth value={postData.question27} onChange={(e) => setPostData({ ...postData, question27: e.target.value })} />
          <TextField name='question271' variant='outlined' label='a.What tools are used to keep in touch virtually?' fullWidth value={postData.question271} onChange={(e) => setPostData({ ...postData, question271: e.target.value })} />
          <TextField name='question28' variant='outlined' label='19.What  aspects of requirements, design, coding and testing are documented?' fullWidth value={postData.question28} onChange={(e) => setPostData({ ...postData, question28: e.target.value })} />
          <TextField name='question281' variant='outlined' label='a.What tools are used for this? (e.g. Confluence)' fullWidth value={postData.question281} onChange={(e) => setPostData({ ...postData, question281: e.target.value })} />
          <Button className={classes.buttonSubmit} variant='contained' color='primary' size='small' type='submit' fullWidth>Submit</Button>
          <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} />
    </>
  )
}

export default Form
