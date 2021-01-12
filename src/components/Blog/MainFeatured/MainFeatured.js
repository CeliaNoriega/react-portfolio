import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: '#3b464b',
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    margin: '5%',
    color: '#b2dfdb'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    }
  }
}))

export default function MainFeaturedPost(props) {
  const classes = useStyles()

  return (
    <Paper className={classes.mainFeaturedPost}>
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h3" variant="h4" color="inherit" gutterBottom>
              Celia Noriega
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              <p>
                Welcome to my portfolio.
              </p>
              <p>
                My name is Celia and I’m a full-stack software developer from UCI. I come from a strong background in customer service and was looking for something challenging that would point me in a new direction. One of my favorite pastimes apart from coding is singing and playing the piano.
              </p>
            </Typography>
          </div>
        </Grid>
      </Grid>
      
    </Paper>
  )
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
}