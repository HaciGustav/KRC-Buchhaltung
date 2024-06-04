import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import LangSwitch from "../LangSwitch";
import SidebarList from "./List";
import {
  AppBar,
  DrawerHeader,
  Main,
  drawerHeight,
  drawerWidth,
} from "./LayoutComponents";

const Layout = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          height: drawerHeight,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingInline: "1rem",
            height: "100%",
          }}
        >
          Großmarktstraße 4, 1230 Wien - Tel:
          <span style={{ paddingInline: "3px" }} />
          <a href="tel:+43 660 174 39 00 "> +43 660 174 39 00 </a>
          <span style={{ paddingInline: "3px" }}> | </span>
          <a href="mailto:office@krc-k.at"> office@krc-k.at</a>
        </div>
      </AppBar>
      {/* <AppBar
        sx={{
          backgroundColor: "#fff",
          height: drawerHeight,
        }}
        position="fixed"
        open={open}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "grid",
                placeItems: "center",
                paddingInline: "2rem",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                edge="start"
                sx={{ color: "#692046", mr: 2 }}
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </div>
            <div
              style={{
                display: "flex",
                columnGap: "1rem",
                alignItems: "center",
              }}
            >
              <img style={{ width: "5.5rem" }} src="/assets/logo.svg" />
              <h3 style={{ color: "#000", fontSize: "1rem" }}>
                KRC Buchhaltungskanzlei KG
              </h3>
            </div>
          </Toolbar>

          <LangSwitch />
        </div>
      </AppBar> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          zIndex: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader />
        <div
          style={{
            display: "flex",
            columnGap: "1rem",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingBlock: "2rem",
          }}
        >
          <img style={{ width: "8rem" }} src="/assets/logo.svg" />
          <h3 style={{ color: "#000", fontSize: "1rem", textAlign: "center" }}>
            <span
              style={{
                fontSize: "1.5rem",
                display: "block",
                width: "100%",
                padding: "0",
              }}
            >
              {" "}
              KRC{" "}
            </span>{" "}
            Buchhaltungskanzlei KG
          </h3>
        </div>

        <Divider />

        <SidebarList />
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};
export default Layout;
