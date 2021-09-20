import React, { useEffect } from 'react'
import { Container, Typography, Grow, List, ListItem, ListItemText, Button, Grid, Paper } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getPosts } from '../../actions/questionnaire'
//import Posts from '../../components/Questionnaire/Posts/Posts'
import Form from '../../components/Questionnaire/Form/Form'
import useStyles from './styles'

const Questionnaire = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
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

export default Questionnaire;