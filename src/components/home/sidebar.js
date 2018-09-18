import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Link } from 'react-router-dom';

export const Sidebar = (
  <div>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
          <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Divider />
    <Link to="/users" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </Link>
    <Link to="/laptops" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <LaptopMacIcon />
        </ListItemIcon>
        <ListItemText primary="Laptops" />
      </ListItem>
    </Link>
    <Link to="/loans" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <RepeatIcon />
        </ListItemIcon>
        <ListItemText primary="Loans" />
      </ListItem>
    </Link>
  </div>
);