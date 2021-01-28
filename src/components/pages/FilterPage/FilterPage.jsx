import React from 'react'
import SideBar from '../../bars/SideBar'
import { Box, Container, Grid, Hidden } from '@material-ui/core/'
import data from '../../../data/data'
import cities from '../../../data/cities'
import categories from '../../../data/categories'
import FilterPageContent from './FilterPageContent'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../../../services/theme'

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
    this.state = initialState
    this.state = { ...initialState, ...this.getFilteredData(initialState) }
  }

  setFilter = this.setState.bind(this)

  getFilteredData = (state = this.state) => {
    const { filter } = state
    const categoriesWithCount = state.categories.map(cat => {
      cat.count = 0
      return cat
    })
    const newData = data.filter(obj => {
      const catIndex = categoriesWithCount.findIndex(
        cat => cat.id === obj.category
      )
      const mainFiltration =
        (!filter.city || obj.city === filter.city) &&
        obj.price >= filter.price[0] &&
        obj.price <= filter.price[1]

      const catFiltration =
        !filter.categories.length || filter.categories.includes(obj.category)

      if (mainFiltration) categoriesWithCount[catIndex].count += 1
      return mainFiltration && catFiltration
    })
    return { data: newData, categories: categoriesWithCount, filter }
  }

  activateFilter = () => {
    const newData = this.getFilteredData()
    this.setState(state => {
      sessionStorage.setItem('filter_save', JSON.stringify(newData.filter))
      return { ...state, ...newData }
    })
  }

  // sideBarProps = {
  //   state: this.state,
  //   cities: this.state.c,
  //   categories: this.state.categories,
  //   setFilter: this.setFilter,
  //   activateFilter: this.activateFilter,
  // }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Container>
          <Hidden smUp>
            <SideBar
              state={this.state}
              cities={this.state.cities}
              categories={this.state.categories}
              setFilter={this.setFilter}
              activateFilter={this.activateFilter}
              mobile
            />
          </Hidden>
          <Grid container>
            <Hidden xsDown>
              <Grid item xs={1} sm={4} md={3}>
                <SideBar
                  state={this.state}
                  cities={this.state.cities}
                  categories={this.state.categories}
                  setFilter={this.setFilter}
                  activateFilter={this.activateFilter}
                />
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={8} md={9}>
              <FilterPageContent state={this.state} />
            </Grid>
          </Grid>
        </Container>
      </MuiThemeProvider>
    )
  }
}

export default FilterPage
