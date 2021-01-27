import React, { useEffect } from 'react'
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core/'

const Selector = props => {
  const { title, data, setFilter } = props
  const handleChange = event => {
    setFilter(state => state.filter.cities = [event.target.value])
  }

  return (
    <Box>
      <Typography variant='h5'>{title}</Typography>
      <FormControl variant='outlined'>
        <Select defaultValue={data[0].id} onChange={handleChange}>
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

export default Selector
