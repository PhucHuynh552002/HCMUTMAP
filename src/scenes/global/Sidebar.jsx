import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
      }}>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}>
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}>
                  Hello!
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
       
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title="MAP"
              to="/"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="TEACHERS"
              to="/teach"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}>
              Buildings
            </Typography>
            <Item
              title="A1"
              to="/A1"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="A2"
              to="/A2"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="A3"
              to="/A3"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="A4"
              to="/A4"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="A5"
              to="/A5"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="B1"
              to="/B1"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="B2"
              to="/B2"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="B3"
              to="/B3"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="B4"
              to="/B4"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="B6"
              to="/B6"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="B7"
              to="/B7"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="B8"
              to="/B8"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="B9"
              to="/B9"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="B10"
              to="/B10"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="B11"
              to="/B11"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="B11"
              to="/B11"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="B12"
              to="/B12"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="C1"
              to="/C1"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="C2"
              to="/C2"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="C3"
              to="/C3"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="C4"
              to="/C4"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="C5"
              to="/C5"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /><Item
              title="C6"
              to="/C6"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="National Polime Key Lab"
              to="/4"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
              <Item
              title="REACTEC"
              to="/8"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
              <Item
              title="KIOS OISP"
              to="/ki"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
