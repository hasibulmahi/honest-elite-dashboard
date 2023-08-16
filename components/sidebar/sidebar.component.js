import React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import InputBase from "@mui/material/InputBase";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { Button } from "@mui/material";

const drawerWidth = 240;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Sidebar(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#FFF",
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          py: "10.5px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box>
              <Search
                sx={{
                  color: "#D3D3D3",
                  border: "1px solid",
                  borderColor: "#D3D3D3",
                  marginLeft: "50px",
                }}
              >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  sx={{
                    color: "#000",
                    fontSize: "12px",
                  }}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                marginLeft: "auto",
              }}
            >
              <IconButton
                sx={{
                  marginRight: 1,
                }}
              >
                <NotificationsNoneIcon />
              </IconButton>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/profile.png" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Box
            sx={{
              py: "15px",
            }}
          >
            <Box>
              <Image
                src="/blank logo 1.png"
                width={90}
                height={35}
                alt="Picture of the author"
              />
            </Box>
            <Box>
              <Typography variant="h5" fontSize={10}>
                The Honest Elite
              </Typography>
            </Box>
          </Box>
        </Toolbar>

        <Divider />
        <List>
          {[
            "Content Type",
            "Category List",
            "Sub Category List",
            "Menu Category",
            "Model Category",
            "Side Bar Item 01",
            "Side Bar Item 02",
            "Side Bar Item 03",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem>
            <Typography>Account</Typography>
          </ListItem>
          {["Settings", "Change Password"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button
          variant="outlined"
          type="submit"
          sx={{
            textTransform: "capitalize",
            color: "#ED028C",
            borderColor: "#ED028C",
          }}
        >
          Logout
        </Button>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
