import React from 'react'
import { Grid } from '@material-ui/core/'
import InfoCard from '../../controllers/InfoCard'

const FilterPageContent = props => {
  const { state } = props

  const getParamName = (param, id) => state[param].find(el => el.id === id).name

  return (
    <Grid container spacing={2}>
      {state.data.map(card => (
        <Grid item xs={12} sm={6} lg={4} key={card.id}>
          <InfoCard data={card} getParamName={getParamName} />
        </Grid>
      ))}
    </Grid>
  )
}

export default FilterPageContent
