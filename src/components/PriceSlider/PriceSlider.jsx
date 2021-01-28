import React, { useState } from 'react'
import { Box, Typography, Slider, Grid } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import FilterButton from '../FilterButton'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  slider: {
    width: `calc(100% - ${theme.spacing(1)}px)`
  },
  indicators: {
    display: 'flex',
  },
  textValue: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
  },
  indicatorNumber: {
    minWidth: 35,
  },
  indicatorMiddle: {
    width: 30,
    justifyContent: 'center',
  },
  bottomContainer: {
    marginTop: theme.spacing(1),
  }
}))

const PriceSlider = props => {
  const classes = useStyles()
  const { title, data, filter, setFilter } = props
  const [value, setValue] = useState(filter)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const onButtonClick = () => {
    setFilter(state => (state.filter.price = value))
  }

  return (
    <Box className={classes.root}>
      <Typography variant='h5' className={classes.title}>{title}</Typography>
      <Slider
        min={data[0]}
        max={data[1]}
        value={value}
        onChange={handleChange}
        aria-labelledby='price-slider'
        className={classes.slider}
      />
      <Grid container className={classes.bottomContainer}> 
        <Grid item xs={7}>
          <Box className={classes.indicators} style={{ height: '100%' }}>
            <Typography
              className={`${classes.textValue} ${classes.indicatorNumber}`}
            >
              {`$${value[0]}`}
            </Typography>
            <Typography
              className={`${classes.textValue} ${classes.indicatorMiddle}`}
            >{` - `}</Typography>
            <Typography
              className={`${classes.textValue} ${classes.indicatorNumber}`}
            >
              {`$${value[1]}`}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <FilterButton onClick={onButtonClick} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default PriceSlider
