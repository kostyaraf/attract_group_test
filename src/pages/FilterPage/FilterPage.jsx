import React from 'react'
import SideBar from '../../components/SideBar/'
import { Container, Grid } from '@material-ui/core/'
import data from '../../data/data'
import cities from '../../data/cities'
import categories from '../../data/categories'
import FilterPageContent from './FilterPageContent'

const sortPrices = data.sort((a, b) => a.price - b.price)
const minPrice = sortPrices[0].price
const maxPrice = sortPrices[sortPrices.length - 1].price
const filterSave = sessionStorage.getItem('filter_save')

const initialFilter = filterSave
  ? JSON.parse(filterSave)
  : {
      price: [0, maxPrice],
      city: false,
      categories: [],
    }

const initialState = {
  data,
  cities,
  categories,
  prices: [minPrice, maxPrice],
  filter: initialFilter,
}

class FilterPage extends React.Component {
  constructor(props) {
    super()
    initialState.data = this.getFilteredData(initialState)
    this.state = initialState
  }

  setFilter = this.setState.bind(this)

  getFilteredData = (state = this.state) => {
    const { filter } = state
    return data.filter(
      obj =>
        (!filter.city || obj.city === filter.city) &&
        obj.price >= filter.price[0] &&
        obj.price <= filter.price[1] &&
        (!filter.categories.length || filter.categories.includes(obj.category))
    )
  }

  onFilterButtonClick = () => {
    const newData = this.getFilteredData()
    this.setState(state => {
      state.data = newData
      return state
    })
    sessionStorage.setItem('filter_save', JSON.stringify(this.state.filter))
  }

  render() {
    console.log('Filter: ', this.state.filter)
    return (
      <div>
        <Container>
          <Grid container>
            <Grid item xs={3}>
              <SideBar
                state={this.state}
                cities={this.state.cities}
                categories={this.state.categories}
                setFilter={this.setFilter}
                onFilterButtonClick={this.onFilterButtonClick}
              />
            </Grid>
            <Grid item xs={9}>
              <FilterPageContent state={this.state} />
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default FilterPage
