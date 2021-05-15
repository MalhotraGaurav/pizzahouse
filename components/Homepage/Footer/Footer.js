import { Container, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import useStyles from "./Footer.style";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={4} className={classes.footerContainer}>
          <Grid item xs={6} md={3}>
            <Typography variant="h5" gutterBottom>
              Company
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Who we are
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Blog
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Career
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Report Fraud
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Contact
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h5" gutterBottom>
              For Foodies
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Code of conduct
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Community
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Blogger Help
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Mobile Apps
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h5" gutterBottom>
              For Business
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Restaurant
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Franchise
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h5" gutterBottom>
              For You
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Privacy
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Terms
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Security
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Sitemap
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container maxWidth="md" className={classes.footerEnd}>
        <Typography variant="h6" align="center" gutterBottom>
          Having that crispy and melty pizza in the comfort of your own home
          with the ones you love, we say.
        </Typography>
        <Container maxWidth="xs" className={classes.socialContainer}>
          <Grid container spacing={3} justify="center">
            <Grid item>
              <TwitterIcon />
            </Grid>
            <Grid item>
              <FacebookIcon />
            </Grid>
            <Grid item>
              <LinkedInIcon />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
