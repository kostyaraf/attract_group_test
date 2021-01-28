import React from 'react'
import {
  Box,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core/'

const CategoryCheckbox = props => {
  const { title, data, filter, setFilter } = props
  
  const handleChange = event => {
    const value = +event.target.value
    setFilter(state => {
      let { categories } = state.filter
      const index = categories.indexOf(value)
      index === -1 ? categories.push(value) : categories.splice(index, 1)
      state.filter.categories = [...categories]
      return state
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
                <>
                <Checkbox
                  checked={filter.includes(cat.id)}
                  onChange={handleChange}
                  name={cat.name}
                  value={cat.id}
                  disabled={!cat.count && !filter.includes(cat.id)}
                />
                <Typography>{cat.name}</Typography>
                {!!cat.count && (
                <Typography>{`(${cat.count})`}</Typography>
                )}
                </>
              }
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  )
}

export default CategoryCheckbox
