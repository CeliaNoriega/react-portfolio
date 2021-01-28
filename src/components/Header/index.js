import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({

  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'space-between',
    overflowX: 'auto',
    color: '#000000',
    backgroundColor: '#D8D8F6',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}))

export default function Header(props) {
  const classes = useStyles()
  const { sections } = props;

  return (
    <React.Fragment>
      <Toolbar component="nav" variant="dense" className={classes.toolbar}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
}