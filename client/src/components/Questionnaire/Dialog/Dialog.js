import React from 'react'
import { useSelector } from 'react-redux'
import { CircularProgress, Dialog, DialogContent, DialogTitle, Grid, Button, Typography } from '@material-ui/core';
import Post from './Popup/Popup'
import * as AiIcons from "react-icons/ai";

const Popup = (props) => {
    const { openPopup, setOpenPopup } = props;

    const posts = useSelector((state) => state.posts)

    return (
        <Dialog open={openPopup} maxWidth="md">
            <DialogTitle>
                <div style={{display: 'flex'}}>
                   <Typography style={{flexGrow: 1}}>Collected Info here</Typography>
                   <Button color="secondary" onClick={() => {setOpenPopup(false)}}><AiIcons.AiOutlineClose /></Button>
                </div>
            </DialogTitle> 
            <DialogContent dividers>
                {!posts.length ? <CircularProgress /> : (
                    <Grid container alignItems="stretch">
                        {posts.map((post) => (
                            <Grid key={post._id} item>
                                <Post post={post} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </DialogContent>
        </Dialog>
    )
}

export default Popup;