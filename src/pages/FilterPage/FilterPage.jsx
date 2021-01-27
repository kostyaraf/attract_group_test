import React from 'react'
import SideBar from '../../components/SideBar/'
import CitiesList from '../../components/CitiesList/'
import { Container } from '@material-ui/core/'
import data from '../../data/data'
import cities from '../../data/cities'
import categories from '../../data/categories'

const initialState = {
  data,
  cities,
  categories,
  filter: {
    price: [],
    cities: [cities[0].id],
    categories: [],
  }
}

class FilterPage extends React.Component {
  constructor(props) {
    super()
    this.state = initialState
  }

  setFilter = this.setState.bind(this)

  // setFilter = (filterName,) => {
  //   this.setState(state => {
  //     state[filterName] = 
  //   })
  // }

  render() {
    console.log('Filter: ', this.state.filter)
    return (
      <div>
        <Container maxWidth='sm'>
        <SideBar
          data={this.state.data}
          cities={this.state.cities}
          categories={this.state.categories}
          // setFilter={this.setState}
          setFilter={this.setFilter}
          
        />
</Container>
      </div>
      // 
      //   {/* {console.log('state', this.state)} */}
      //   {/*  */}
      //   {/* <CitiesList /> */}
      // </Container>
    )
  }
}

export default FilterPage
