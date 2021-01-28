import React from 'react'
import {
  Box,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

const InfoCard = props => {
  const { data, getParamName } = props
  const classes = useStyles()

  return (
    <Box>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.image}
            title={data.name}
          >
            <Typography gutterBottom variant='body1' component='h2'>
              {getParamName('cities', data.city)}
            </Typography>
          </CardMedia>

          <CardContent>
            <Typography variant='body1' color='textSecondary' component='p'>
              {data.name}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {getParamName('categories', data.category)}
            </Typography>
            <Typography variant='body1' color='textSecondary' component='p'>
              {`$${data.price}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
        </CardActions>
      </Card>
    </Box>
  )
}

export default InfoCard
