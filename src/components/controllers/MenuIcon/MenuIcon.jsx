import React from 'react'
import { CardActionArea } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-betwen',
  },
}))

const InfoCard = props => {
  const { size = 40, color = '#000000' } = props
  const classes = useStyles()
  const lineStyle = { width: '100%', height: '5%', backgroundColor: color }

  return (
    <CardActionArea
      style={{ width: size, height: size }}
      className={classes.root}
    >
      <svg viewBox='0 0 100 80' width='40' height='40'>
        <rect width='100' height='10'></rect>
        <rect y='30' width='100' height='10'></rect>
        <rect y='60' width='100' height='10'></rect>
      </svg>
    </CardActionArea>
  )
}

export default InfoCard
