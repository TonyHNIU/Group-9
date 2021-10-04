import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Dialog, DialogTitle, Button, Typography } from '@material-ui/core'
import * as AiIcons from 'react-icons/ai'
import Clone2 from '../Dnd/Board'

const Activities = (props) => {
    const { openPopup, setOpenPopup } = props

    const acts = props.sums;

    console.log("object",acts)
    console.log("object1", openPopup)
    return (
        <Dialog maxWidth='md' fullScreen>
            <DialogTitle>
                <div>
                    <Typography style={{ flexGrow: 1 }}>Collected Activities here</Typography>
                    <Button color='secondary' onClick={() => { setOpenPopup(false) }}><AiIcons.AiOutlineClose /></Button>
                </div>
            </DialogTitle>
            <div>
                <Clone2 id='board-1' className='board'>
                    {
                        acts.map(act => (
                            <label>
                                
                            </label>
                        ))
                    }
                </Clone2>
            </div>
        </Dialog>
    )
}

export default Activities
