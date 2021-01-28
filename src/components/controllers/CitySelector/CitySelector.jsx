import React, { useRef } from 'react'
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 0,
    height: theme.spacing(5),
    color: theme.palette.text.default,
    '& .MuiSelect-select': {
      padding: '11px 14px',
    },
  },
  item: {
    color: theme.palette.text.default,
  },
}))

const CitySelector = props => {
  const classes = useStyles()
  const { title, data, setFilter, filter } = props
  const defaultValue = useRef(filter)
  const handleChange = event => {
    const { value } = event.target
    setFilter(state => (state.filter.city = value))
  }

  return (
    <Box mb={7}>
      <Typography variant='h5' component='p'>
        {title}
      </Typography>
      <FormControl variant='outlined' style={{ width: '100%', paddingTop: 8 }}>
        <Select
          defaultValue={defaultValue.current}
          onChange={handleChange}
          className={classes.root}
          color='primary'
        >
          <MenuItem value={'all'} name='All' className={classes.item}>
            All
          </MenuItem>
          {data.map(city => (
            <MenuItem
              value={city.id}
              name={city.name}
              key={city.id}
              className={classes.item}
            >
              {city.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default CitySelector
