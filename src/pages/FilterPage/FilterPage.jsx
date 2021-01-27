import React from 'react'
import SideBar from '../../components/SideBar/'
import CitiesList from '../../components/CitiesList/'
import { Container } from '@material-ui/core/'
import data from '../../data/data'
import cities from '../../data/cities'
import categories from '../../data/categories'

const sortPrices = data.sort((a, b) => a.price - b.price)
const minPrice = sortPrices[0].price
const maxPrice = sortPrices[sortPrices.length - 1].price

const initialState = {
  data,
  cities,
  categories,
  prices: [minPrice, maxPrice],
  filter: {
    price: [0, maxPrice],
    cities: [cities[0].id],
    categories: [2],
  },
}

class FilterPage extends React.Component {
  constructor(props) {
    super()
    this.state = initialState
  }

  setFilter = this.setState.bind(this)

  render() {
    console.log('Filter: ', this.state.filter)
    return (
      <div>
        <Container maxWidth='sm'>
          <SideBar
            state={this.state}
            data={this.state.data}
            cities={this.state.cities}
            categories={this.state.categories}
            setFilter={this.setFilter}
          />
        </Container>
      </div>
    )
  }
}

export default FilterPage
