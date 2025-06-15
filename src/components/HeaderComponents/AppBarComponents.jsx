import React from "react";
import {
  AppBar, Toolbar, IconButton, Typography, Menu,
  MenuItem, Button, Container, Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";

const pages = ["Home", "Skills", "Projects", "Contact Me"];

function AppBarComponents() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const scrollToId = (label) => {
    return label.toLowerCase().replace(/\s+/g, "-"); // "Contact Me" → "contact-me"
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="sm">
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
              ml: "2rem"
            }}
          >
            THWE ZIN NYEIN
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <ScrollLink
                    to={scrollToId(page)}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    style={{ cursor: "pointer" }}
                  >
                    {page}
                  </ScrollLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            THWE ZIN NYEIN
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <ScrollLink
                key={page}
                to={scrollToId(page)}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </ScrollLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppBarComponents;
