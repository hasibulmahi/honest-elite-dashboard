import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
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
import Image from "next/image";
import { AppBar, Button, Collapse } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ListSubheader from "@mui/material/ListSubheader";
import { CategoryItem } from "./sidebar-item";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

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
      width: "24ch",
      "&:focus": {
        width: "24ch",
      },
    },
  },
}));

function Sidebar(props) {
  const [open, setOpen] = React.useState(true);
  const [activeItem, setActiveItem] = React.useState(null);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: "#FFF",
        }}
      >
        <Toolbar
          sx={{
            py: "1.1rem",
          }}
        >
          <Search
            sx={{
              color: "#000",
              border: "1px solid",
              borderColor: "#808080",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon
                sx={{
                  color: "#808080",
                }}
              />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
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
        <Toolbar
          sx={{
            py: "15px",
          }}
        >
          <Box>
            <Box>
              <Image
                src="/blank logo 1.png"
                width={80}
                height={25}
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
          {CategoryItem &&
            CategoryItem.map((item, i) => {
              return (
                <>
                  <ListItemButton
                    key={i}
                    onClick={() => {
                      if (i === activeItem) {
                        setActiveItem(null);
                      } else {
                        setActiveItem(i);
                      }
                    }}
                    sx={{
                      backgroundColor: i === activeItem ? "#ED028C" : "inherit",
                    }}
                  >
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h5" fontSize={12} fontWeight={500}>
                        {item.category}
                      </Typography>
                    </ListItemText>
                    {activeItem === i ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  {item?.subCategory?.length > 0 && (
                    <Collapse
                      in={activeItem == i ? true : false}
                      timeout="auto"
                      unmountOnExit
                    >
                      {item?.subCategory.map((sc, index) => {
                        return (
                          <List component="div" disablePadding key={index}>
                            <ListItemButton sx={{ pl: 4 }}>
                              <ListItemIcon>{item.icon}</ListItemIcon>
                              <ListItemText>
                                <Typography
                                  variant="h5"
                                  fontSize={12}
                                  fontWeight={500}
                                >
                                  {sc}
                                </Typography>
                              </ListItemText>
                            </ListItemButton>
                          </List>
                        );
                      })}
                    </Collapse>
                  )}
                </>
              );
            })}
        </List>
        <Divider />
        <List>
          <ListSubheader>Account</ListSubheader>
          {["Settings", "Change Password"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h5" fontSize={13} fontWeight={600}>{text}</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{
          display: "flex",
          justifyContent: "center"
        }}>
        <Button
          variant="outlined"
          type="submit"
          sx={{
            textTransform: "capitalize",
            color: "#ED028C",
            borderColor: "#ED028C",
            width: "180px"
          }}
        >
          Log out
        </Button>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
