import React from 'react'
import { Button } from '@material-ui/core/'

const FilterButton = props => {
  return (
    <Button
      variant='contained'
      size='small'
      color='primary'
      onClick={props.onClick}
      style={{ width: '100%' }}
    >
      Filter
    </Button>
  )
}

export default FilterButton
