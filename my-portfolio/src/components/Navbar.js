import React, { useState, useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, FormControlLabel, Switch, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import PersonIcon from "@mui/icons-material/Person"; // ไอคอนสำหรับ About Me

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState(null);

  // เปิดเมนูเมื่อเมาส์ชี้
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // ปิดเมนู
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        height: "90px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: darkMode ? "#333" : "#000066", // เปลี่ยนสีแทบบน
      }}
    >
      <Toolbar sx={{ minHeight: "90px" }}>
        <Typography variant="h5" sx={{ flexGrow: 1, color: "#fff" }}>
          Ball Theerayut
        </Typography>

        {/* ปุ่ม Dropdown Menu */}
        <Button
          color="inherit"
          onMouseEnter={handleMenuOpen}
          startIcon={<MenuIcon />}
          sx={{
            fontSize: "1.2rem",
            padding: "12px 24px",
            borderRadius: "40px",
            backgroundColor: darkMode ? "#444" : "#eee",
            color: darkMode ? "#fff" : "#000",
            "&:hover": {
              backgroundColor: darkMode ? "#555" : "#ddd",
            }
          }}
        >
          Menu
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{ onMouseLeave: handleMenuClose }}
        >
          <MenuItem component={Link} to="/" onClick={handleMenuClose}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            Home
          </MenuItem>
          <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            About Me
          </MenuItem >
          <MenuItem component={Link} to="/projects" onClick={handleMenuClose}>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            Projects
          </MenuItem>
          <MenuItem component={Link} to="/contact" onClick={handleMenuClose}>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            Contact
          </MenuItem>
        </Menu>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={toggleTheme}
              color="default"
              icon={<Brightness7Icon />}
              checkedIcon={<Brightness4Icon />}
            />
          }
          label={darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
          sx={{ ml: 2, color: "#fff" }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
