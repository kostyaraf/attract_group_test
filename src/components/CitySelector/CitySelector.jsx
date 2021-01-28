import React, { useState } from 'react'
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core/'

const CitySelector = props => {
  const { title, data, setFilter, filter } = props
  const [city, setCity] = useState(filter)
  const handleChange = event => {
    const { value } = event.target
    setCity(value)
    setFilter(state => (state.filter.city = value))
  }

  return (
    <Box>
      <Typography variant='h5'>{title}</Typography>
      <FormControl variant='outlined'>
        <Select defaultValue={city} onChange={handleChange}>
          <MenuItem value={false} name='All'>
            All
          </MenuItem>
          {data.map(city => (
            <MenuItem value={city.id} name={city.name} key={city.id}>
              {city.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default CitySelector
