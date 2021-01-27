import React from 'react'
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core/'

const CitySelector = props => {
  const { title, data, setFilter } = props
  const handleChange = event => {
    setFilter(state => state.filter.city = event.target.value)
  }

  return (
    <Box>
      <Typography variant='h5'>{title}</Typography>
      <FormControl variant='outlined'>
        <Select defaultValue={false} onChange={handleChange}>
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
