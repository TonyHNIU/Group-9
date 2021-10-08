import React from 'react'
import { Dialog, DialogTitle, Button, Typography } from '@material-ui/core'
import * as AiIcons from 'react-icons/ai'
import Clone2 from '../Dnd/Board'
import Card from '../Dnd/Card'

const Activities = (props) => {
  const { openPopup, setOpenPopup } = props

  const acts = props.sums
  return (
    <Dialog open={openPopup} maxWidth='md' fullScreen>
      <DialogTitle>
        <div style={{ display: 'flex' }}>
          <Typography style={{ flexGrow: 1 }}>Collected Activities here</Typography>
          <Button color='secondary' onClick={() => { setOpenPopup(false) }}><AiIcons.AiOutlineClose /></Button>
        </div>
      </DialogTitle>
      <div>
        <Clone2 id='board-1' className='board'>
          {
                        acts.map(act => (
                          <label key='card_Id'>
                            <Card
                              id='card-1'
                              className='card'
                              draggable='true'
                              key='card_Id'
                            >
                              {act}
                            </Card>
                            <br />
                          </label>
                        ))
                    }
        </Clone2>
        <p>Week 1 - 2</p>
        <Clone2>
          <label>
            <Card
              id='card-2'
              className='card'
              draggable='true'
            />
            <br />
            <br />
            <br />
          </label>
        </Clone2>
        <p>Week 3 - 4</p>
        <Clone2>
          <label>
            <Card
              id='card-2'
              className='card'
              draggable='true'
            />
            <br />
            <br />
            <br />
          </label>
        </Clone2>
        <p>Week 5 - 6</p>
        <Clone2>
          <label>
            <Card
              id='card-2'
              className='card'
              draggable='true'
            />
            <br />
            <br />
            <br />
          </label>
        </Clone2>
      </div>
    </Dialog>
  )
}

export default Activities
