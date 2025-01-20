import React from 'react';
import styles from './Header.module.css'; // Import as styles
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

export default function Header({ signedIn, onSignOut }) {
  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <AppBar position="static" color="default" elevation={0} className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          >
            App
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            className={styles.link}
            component={RouterLink}
            to={signedIn ? '/' : '/auth/signin'}
            onClick={onClick}
          >
            {signedIn ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
