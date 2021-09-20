import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { InputLabel, MenuItem, Select, FormControl } from '@mui/material'
import { useDispatch } from 'react-redux'
import Popup from '../Dialog/Dialog'
import * as AiIcons from 'react-icons/ai'

import useStyles from './styles'
import { createPost } from '../../../actions/questionnaire'

const Form = () => {
    const [postData, setPostData] = useState({ question1: '', question2: '', question3: '', question4: '', question5: '', question6: '', question7: '', question8: '', question9: '', question10: '', question11: '' });
    const [select, setSelect] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const clear = () => {

    }
    
    const handleChange = (e) => {
        setSelect(e.target.value)
        setPostData({ ...postData, question11: e.target.value})
    }

    const [openPopup, setOpenPopup] = useState(false);

    return (
        <>
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Organisational Information</Typography>
                <Button
                className={classes.newButton}
                variant="outlined"
                onClick={() => setOpenPopup(true)}
                >
                    <AiIcons.AiOutlineUnorderedList />
                </Button>
                <TextField name="question1" variant="outlined" label="1.Who is the Manager that the team manager reports to?" fullWidth value={postData.question1} onChange={(e) => setPostData({ ...postData, question1: e.target.value })} />
                <TextField name="question2" variant="outlined" label="2.Where is an organisational chart available?" fullWidth value={postData.question2} onChange={(e) => setPostData({ ...postData, question2: e.target.value })} />
                <TextField name="question3" variant="outlined" label="3.Is there an Induction program for new employees? If so how/when can this be accessed?" fullWidth value={postData.question3} onChange={(e) => setPostData({ ...postData, question3: e.target.value })} />
                <TextField name="question4" variant="outlined" label="4.What funds are available for the onboarder to attend formal courses?" fullWidth value={postData.question4} onChange={(e) => setPostData({ ...postData, question4: e.target.value })} />
                <TextField name="question5" variant="outlined" label="5.Is there a qualified suitable mentor available for the new employee?" fullWidth value={postData.question5} onChange={(e) => setPostData({ ...postData, question5: e.target.value })} />
                <TextField name="question6" variant="outlined" label="6.How can the organisational vision best be understood?" fullWidth value={postData.question6} onChange={(e) => setPostData({ ...postData, question6: e.target.value })} />
                <TextField name="question7" variant="outlined" label="7.How can the product/service offered by the organisation best be understood by a new employee (video, marketing material, market segments etc)" fullWidth value={postData.question7} onChange={(e) => setPostData({ ...postData, question7: e.target.value })} />
                <TextField name="question8" variant="outlined" label="8.What tools are used for company wide communications?" fullWidth value={postData.question8} onChange={(e) => setPostData({ ...postData, question8: e.target.value })} />
                <TextField name="question9" variant="outlined" label="9.Is there a company wide knowledge base?" fullWidth value={postData.question9} onChange={(e) => setPostData({ ...postData, question9: e.target.value })} />
                <Typography variant="h6">Team Information</Typography>
                <TextField name="question10" variant="outlined" label="1.Who is the team leader?" fullWidth value={postData.question10} onChange={(e) => setPostData({ ...postData, question10: e.target.value })} />
                <FormControl fullWidth>
                <InputLabel id="question11">2.What are the main architectural styles used in the code base?</InputLabel>
                <Select variant="outlined" label="What are the main architectural styles used in the code base?" labelId="question11" value={select} onChange={handleChange}>
                    <MenuItem value={'layered'}>Layered</MenuItem>
                    <MenuItem value={'eventdriven'}>Event Driven</MenuItem>
                    <MenuItem value={'microservices'}>Microservices</MenuItem>
                    <MenuItem value={'other'}>other</MenuItem>
                </Select>
                </FormControl>
                <Typography>The rest question coming soon</Typography>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
        <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        >

        </Popup>
        </>
    );
}

export default Form;