import React from 'react'
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 0,
    '&:hover': {
      boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
      '& .MuiBox-root': {
        opacity: '0.6',
      },
    },
  },
  hoverLight: {
    transition: 'opacity ease-in 200ms',
    background: theme.palette.primary.main,
    opacity: '0',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  media: {
    height: 180,
    position: 'relative',
  },
  mediaGradient: {
    position: 'absolute',
    width: '100%',
    height: '80%',
    background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4))',
    bottom: 0,
  },
  cityName: {
    position: 'absolute',
    bottom: 8,
    left: 23,
    color: theme.palette.text.light,
  },
  cardContent: {
    padding: '16px 19px',
  },
  infoText: {
    color: theme.palette.text.default,
  },
  priceText: {
    color: theme.palette.text.default,
    marginBottom: 0,
  },
}))

const InfoCard = props => {
  const { data, getParamName } = props
  const classes = useStyles()

  return (
    <Box>
      <Card className={classes.root}>
        <CardActionArea className={classes.cardActionArea}>
          <CardMedia
            className={classes.media}
            image={data.image}
            title={data.name}
          >
            <div className={classes.mediaGradient}></div>
            <Box className={classes.hoverLight}></Box>
            <Typography
              gutterBottom
              variant='body2'
              component='h2'
              className={classes.cityName}
            >
              {getParamName('cities', data.city)}
            </Typography>
          </CardMedia>

          <CardContent className={classes.cardContent}>
            <Typography variant='h6' component='p' className={classes.infoText}>
              {data.name}
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {getParamName('categories', data.category)}
                </Typography>
              </Grid>
              <Grid item xs={6} style={{ textAlign: 'right' }}>
                <Typography
                  variant='h6'
                  color='textSecondary'
                  component='p'
                  className={classes.priceText}
                >
                  {`$${data.price}`}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}

export default InfoCard
