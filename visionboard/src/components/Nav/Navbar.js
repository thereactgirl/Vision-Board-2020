import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Link} from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

//components 
import VisionDrawer from './VisionDrawer';
import { connect } from 'react-redux';
import ModalActions from '../../redux/modals/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({addItem, setAddVisionDialog}) => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElVisions, setAnchorElVisions] = React.useState(null);

  const open = Boolean(anchorEl);
  const isVisionsMenuOpen = Boolean(anchorElVisions)

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleVisionsMenu = (event) => {
    setAnchorElVisions(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElVisions(null)
    setAnchorEl(null);
  };

  const openAddVision = () => {
    setAddVisionDialog(true)
  }

  const goToBoard = () => {

  }

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            onClick={handleVisionsMenu} 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            aria-controls="menu-visions"
            >
            <MenuIcon />
          </IconButton>
          <Menu
                id="menu-visions"
                anchorEl={anchorElVisions}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={isVisionsMenuOpen}
                onClose={handleClose}
              >
                
                <MenuItem onClick={openAddVision}>Add New Vision</MenuItem>
              
                <MenuItem onClick={goToBoard}>Vision Board</MenuItem>
            </Menu>
            
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className="nav-item">
            My Vision Board
            </Link>
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    addItem: state.modals,
    
  }
}

const mapDispatchToProps = {
  setAddVisionDialog: ModalActions.setAddVisionDialog
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
