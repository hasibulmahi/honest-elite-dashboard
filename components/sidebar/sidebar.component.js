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
import ListSubheader from "@mui/material/ListSubheader";
import { CategoryItem } from "./sidebar-item";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';

const drawerWidth = 240;

function Sidebar(props) {
  const [open, setOpen] = React.useState(true);
  const [activeItem, setActiveItem] = React.useState(null);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          position: "relative",
          height: "100vh",
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
            <Typography
              sx={{
                color: "#ED028C",
              }}
              variant="h5"
              fontSize={10}
            >
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
                {index % 2 === 0 ? <SettingsIcon /> : <LockIcon />}
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h5" fontSize={13} fontWeight={600}>
                  {text}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          type="submit"
          sx={{
            textTransform: "capitalize",
            color: "#ED028C",
            borderColor: "#ED028C",
            width: "180px",
          }}
        >
          Log out
        </Button>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
