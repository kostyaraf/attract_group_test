import React from 'react'
import { Grid } from '@material-ui/core/'
import InfoCard from '../../controllers/InfoCard'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '37px 0 37px 13px',
  },
}))

const FilterPageContent = props => {
  const classes = useStyles()
  const { state } = props
  const getParamName = (param, id) => state[param].find(el => el.id === id).name

  return (
    <Grid container spacing={4} className={classes.root}>
      {state.data.map(card => (
        <Grid item xs={12} sm={6} lg={4} key={card.id}>
          <InfoCard data={card} getParamName={getParamName} />
        </Grid>
      ))}
    </Grid>
  )
}

export default FilterPageContent
