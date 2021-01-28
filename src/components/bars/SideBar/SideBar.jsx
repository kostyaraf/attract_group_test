import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core/'
import CitySelector from '../../controllers/CitySelector'
import CategoryCheckbox from '../../controllers/CategoryCheckbox'
import PriceSlider from '../../controllers/PriceSlider'
import MenuIcon from '../../controllers/MenuIcon'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 1, 1),
    maxWidth: 240,
  },
  mobile: {
    position: 'absolute',
    width: `calc(100% - ${theme.spacing(11)}px)`,
    height: '100%',
    zIndex: 2,
    backgroundColor: theme.palette.background.light,
    padding: theme.spacing(8, 4, 4),
  },
  burgerMenu: {
    position: 'fixed',
    zIndex: 3,
    left: theme.spacing(4),
    top: theme.spacing(3),
  },
  openMobileBar: {
    transition: 'left ease-out .3s',
    left: 0,
  },
  closedMobileBar: {
    transition: 'left ease-in .3s',
    left: '-100vw',
  },
}))

const SideBar = props => {
  const classes = useStyles()
  const { state, setFilter, activateFilter, mobile } = props
  const { city, categories, price } = state.filter
  useEffect(activateFilter, [city, categories, price, activateFilter])
  const [openMenu, setOpenMenu] = useState(false)
  const onBurgerClick = () => {
    setOpenMenu(!openMenu)
  }


  return (
    <>
      {mobile && (
        <Box className={classes.burgerMenu} onClick={onBurgerClick}>
          <MenuIcon />
        </Box>
      )}
      <Box
        className={`
          ${mobile ? classes.mobile : classes.root} 
          ${
            mobile
              ? openMenu
                ? classes.openMobileBar
                : classes.closedMobileBar
              : ''
          }`}
      >
        <CitySelector
          title='City'
          data={state.cities}
          setFilter={setFilter}
          filter={state.filter.city}
        />
        <CategoryCheckbox
          title='Categories'
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
      </Box>
    </>
  )
}

export default SideBar
