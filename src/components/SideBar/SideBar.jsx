import React from 'react'
import {
  Grid,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core/'
import CitySelector from '../CitySelector'
import CategoryCheckbox from '../CategoryCheckbox'

class SideBar extends React.Component {
  constructor(props) {
    super()
    // this.state = {
    //   data: props.data,
    //   cities: props.cities,
    //   categories: props.categories,
    // }
  }
  render() {
    console.log(this.props)
    return (
      <div style={{ maxWidth: 300 }}>
        <Box>
          <CitySelector
            title='City'
            data={this.props.state.cities}
            setFilter={this.props.setFilter}
          />
          <CategoryCheckbox
            title='Category'
            data={this.props.categories}
            setFilter={this.props.setFilter}
            filter={this.props.state.filter.categories}
          />

          {/* <Typography variant='h5'>CATEGORIES</Typography> */}
        </Box>
      </div>
    )
  }
}

export default SideBar
