import React, { useEffect } from 'react'
import { Box } from '@material-ui/core/'
import CitySelector from '../../controllers/CitySelector'
import CategoryCheckbox from '../../controllers/CategoryCheckbox'
import PriceSlider from '../../controllers/PriceSlider'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 1, 1),
    maxWidth: 240,
  },
}))

const SideBar = props => {
  const classes = useStyles()
  const { state, setFilter, activateFilter } = props
  const { city, categories, price } = state.filter
  useEffect(activateFilter, [city, categories, price, activateFilter])

  return (
    <Box className={classes.root}>
      <CitySelector
        title='City'
        data={state.cities}
        setFilter={setFilter}
        filter={state.filter.city}
      />
      <CategoryCheckbox
        title='Categories'
        data={state.categories}
        setFilter={setFilter}
        filter={state.filter.categories}
      />
      <PriceSlider
        title='Price'
        data={state.prices}
        setFilter={setFilter}
        filter={state.filter.price}
      />
    </Box>
  )
}

export default SideBar
