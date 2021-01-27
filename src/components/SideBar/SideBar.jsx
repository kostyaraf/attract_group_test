import React, { useRef } from 'react'
import { Box } from '@material-ui/core/'
import CitySelector from '../CitySelector'
import CategoryCheckbox from '../CategoryCheckbox'
import PriceSlider from '../PriceSlider'
import FilterButton from '../FilterButton'

const SideBar = props => {
  const { state, setFilter } = props
  const formRef = useRef(null)
  const onFilter = (values) => {
    console.log('FILTER', values)
  }

  return (
    <div style={{ maxWidth: 300 }}>
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
        <FilterButton onClick={onFilter}/>
      </Box>
    </div>
  )
}

export default SideBar
