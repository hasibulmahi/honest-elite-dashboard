import React from "react";

import Toolbar from "@mui/material/Toolbar";

import { AppBar, Button, Collapse } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const drawerWidth = 220;

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

function Navigation(props) {
  return (
    <AppBar
      position="relative"
      sx={{
        width: "100%",
        backgroundColor: "#FFF"
      }}
    >
      <Toolbar>
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
          <StyledInputBase sx={{
            width: "250px",
            fontSize: "14px"
          }}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
