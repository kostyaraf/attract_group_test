import React from 'react'
import { Box } from '@material-ui/core/'
import CitySelector from '../CitySelector'
import CategoryCheckbox from '../CategoryCheckbox'
import PriceSlider from '../PriceSlider'
import FilterButton from '../FilterButton'

const SideBar = props => {
  const { state, setFilter, onFilterButtonClick } = props

  return (
    <div>
      <Box>
        <CitySelector title='City' data={state.cities} setFilter={setFilter} />
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
        <FilterButton onClick={onFilterButtonClick}/>
      </Box>
    </div>
  )
}

export default SideBar
