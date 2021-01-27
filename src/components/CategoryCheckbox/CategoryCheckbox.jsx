import React from 'react'
import {
  Box,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core/'

const Selector = props => {
  const { title, data, filter, setFilter } = props
  const handleChange = event => {
    const value = +event.target.value
    setFilter(state => {
      const { categories } = state.filter
      const index = categories.indexOf(value)
      return index === -1 ? categories.push(value) : categories.splice(index, 1)
    })
  }
  return (
    <Box>
      <Typography variant='h5'>{title}</Typography>
      <FormControl component='fieldset'>
        <FormGroup>
          {data.map(cat => (
            <FormControlLabel
              key={cat.id}
              control={
                <Checkbox
                  checked={filter.includes(cat.id)}
                  onChange={handleChange}
                  name={cat.name}
                  value={cat.id}
                />
              }
              label={cat.name}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  )
}

export default Selector
