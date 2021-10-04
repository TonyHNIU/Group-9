import React from 'react'
import { Card, Typography } from '@material-ui/core'
import moment from 'moment'

import useStyles from './styles'

const Post = ({ post }) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <div>
        <Typography>{post._id}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
    </Card>
  )
}

export default Post
