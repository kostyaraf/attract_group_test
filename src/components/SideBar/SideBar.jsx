import React, { useEffect } from 'react'
import { Box } from '@material-ui/core/'
import CitySelector from '../CitySelector'
import CategoryCheckbox from '../CategoryCheckbox'
import PriceSlider from '../PriceSlider'

const SideBar = props => {
  const { state, setFilter, activateFilter } = props
  const { city, categories, price } = state.filter
  useEffect(activateFilter, [city, categories, price, activateFilter])

  return (
    <div>
      <Box>
        <CitySelector
          title='City'
          data={state.cities}
          setFilter={setFilter}
          filter={state.filter.city}
        />
        <CategoryCheckbox
          title='Category'
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
    </div>
  )
}

export default SideBar
