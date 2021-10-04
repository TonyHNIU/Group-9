import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Dialog, DialogTitle, Button, Typography } from '@material-ui/core'
import * as AiIcons from 'react-icons/ai'
import Clone2 from '../Dnd/Board'
import Card from '../Dnd/Card'

const Activities = (props) => {
    const { openPopup, setOpenPopup } = props

    const acts = props.sums;
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
                                <Card
                                id='card-1'
                                className='card'
                                draggable='true'
                                >
                                    {act}
                                </Card>
                                <br />
                            </label>
                        ))
                    }
                </Clone2>
            </div>
        </Dialog>
    )
}

export default Activities
