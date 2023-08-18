import React from "react";
import Navigation from "../navigation/navigation.component";
import DataTables from "../table/table.component";
import Sidebar from "../sidebar/sidebar.component";
import { Box, Container } from "@mui/material";

const drawerWidth = 240;

function Layout({ children }) {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        px: "0px !important",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          bgcolor: "#FFF",
        }}
      >
        <Navigation />
        <Box
          sx={{
            px: "1rem",
          }}
        >
          {children}
        </Box>
      </Box>
    </Container>
  );
}

export default Layout;
