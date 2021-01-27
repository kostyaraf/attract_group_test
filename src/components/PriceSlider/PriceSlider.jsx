import React, { useState } from 'react'
import {
  Box,
  Typography,
  Slider,
  Grid,
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  textValue: {
    textAlign: 'left'
  }
})

const PriceSlider = props => {
  const classes = useStyles()
  const { title, data, filter, setFilter } = props
  const [value, setValue] = useState(filter)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const onChangeCommitted = (event, newValue) => {
    setFilter(state => (state.filter.price = newValue))
  }

  return (
    <Box className={classes.root}>
      <Typography variant='h5'>{title}</Typography>
      <Slider
        min={data[0]}
        max={data[1]}
        value={value}
        onChange={handleChange}
        onChangeCommitted={onChangeCommitted}
        valueLabelDisplay='auto'
        aria-labelledby='price-slider'
      />
      <Grid container>
        <Grid item xs={7}>
          <Grid container>
            <Grid item xs={5} className={classes.textValue}>
              {`$${value[0]}`}
            </Grid>
            <Grid item xs={2}>
              {' - '}
            </Grid>
            <Grid item xs={5} className={classes.textValue}>
              {`$${value[1]}`}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Box>
  )
}

export default PriceSlider
