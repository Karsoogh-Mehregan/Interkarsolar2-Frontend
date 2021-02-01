import { makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  toTop: {
    zIndex: 2,
    position: 'fixed',
    bottom: '2vh',
    backgroundColor: '#e1bee7',
    color: '#ede7f6',
    "&:hover, &.Mui-focusVisible": {
      transition: '0.3s',
      color: '#673ab7',
      backgroundColor: '#d1c4e9'
    },
    [theme.breakpoints.up('xs')]: {
      right: '1.5%',
      backgroundColor: '#673ab7',
    },
    [theme.breakpoints.up('lg')]: {
      right: '1.9%',
    },
  }
})
)
const Scroll = ({
  showBelow,
}) => {

  const classes = useStyles();

  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <div>
      {show &&
        <IconButton onClick={handleClick} className={classes.toTop} aria-label="to top" component="span">
          <ExpandLessIcon />
        </IconButton>
      }
    </div>
  )
}
export default Scroll