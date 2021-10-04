import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Dialog, DialogTitle, Button, Typography } from '@material-ui/core'
import * as AiIcons from 'react-icons/ai'

const Activities = (props) => {
    return (
        <Dialog maxWidth='md' fullScreen>
            <DialogTitle>
                <div>
                    <Typography style={{ flexGrow: 1 }}>Collected Activities here</Typography>
                    <Button color='secondary'><AiIcons.AiOutlineClose /></Button>
                </div>
            </DialogTitle>
            <div>
                
            </div>
        </Dialog>
    )
}

export default Activities
