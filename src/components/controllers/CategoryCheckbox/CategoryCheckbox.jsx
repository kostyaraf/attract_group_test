import React from 'react'
import {
  Box,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 1, 1),
    maxWidth: 235,
  },
  checkbox: {
    padding: 6,
    '&.Mui-disabled': {
      color: theme.palette.text.secondary,
    },
  },
  disabled: {
    color: theme.palette.text.secondary,
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  count: {
    fontFamily: 'OpenSans',
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(1),
  },
}))

const CategoryCheckbox = props => {
  const classes = useStyles()
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
    <Box mb={6}>
      <Typography variant='h5' component='p' className={classes.title}>
        {title}
      </Typography>
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
                    color='primary'
                    className={classes.checkbox}
                  />
                  <Typography
                    className={
                      !cat.count && !filter.includes(cat.id)
                        ? classes.disabled
                        : ''
                    }
                  >
                    {cat.name}
                  </Typography>
                  {!!cat.count && (
                    <Typography
                      className={classes.count}
                    >{`(${cat.count})`}</Typography>
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
