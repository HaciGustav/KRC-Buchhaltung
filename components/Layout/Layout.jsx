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
import SidebarList from "./List";
import {
  AppBar,
  DrawerHeader,
  Main,
  drawerHeight,
  drawerWidth,
} from "./LayoutComponents";
import Link from "next/link";

import css from "@/styles/layout.module.css";
import { useMediaQuery } from "@mui/material";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const screenMedium = useMediaQuery("(max-width:800px)");
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    setOpen(screenMedium ? false : true);
  }, [screenMedium]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          height: drawerHeight,
          backgroundColor: "#692046",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "flex-start",
        }}
      >
        {screenMedium && (
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              columnGap: "10px",
              color: "#fff",
            }}
          >
            <IconButton onClick={() => setOpen(!open)}>
              {open ? (
                <CloseIcon sx={{ color: "#fff" }} />
              ) : (
                <MenuIcon sx={{ color: "#fff" }} />
              )}
            </IconButton>

            <Link
              href={"/"}
              style={{
                textDecoration: "none",
                backgroundColor: "#591036",
                display: "grid",
                placeItems: "center",
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "25%",
              }}
            >
              <img style={{ width: "2rem" }} src="/assets/logo.svg" />
            </Link>

            <h3 style={{ fontSize: "0.7rem", textAlign: "center" }}>
              <span
                style={{
                  fontSize: "0.7rem",
                  // display: "block",
                  // width: "100%",
                  padding: "0",
                }}
              >
                {" "}
                KRC{" "}
              </span>{" "}
              Buchhaltungskanzlei KG
            </h3>
          </div>
        )}

        {!screenMedium && (
          <div className={css.header_info_div}>
            Großmarktstraße 4, 1230 Wien - Tel:
            <span style={{ paddingInline: "3px" }} />
            <a href="tel:+43 660 174 39 00 "> +43 660 174 39 00 </a>
            <span style={{ paddingInline: "3px" }}> | </span>
            <a href="mailto:office@krc-k.at"> office@krc-k.at</a>
          </div>
        )}
      </AppBar>

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
          <Link href={"/"} style={{ textDecoration: "none" }}>
            <img style={{ width: "8rem" }} src="/assets/logo.svg" />
          </Link>
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
        {/* <Divider /> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};
export default Layout;
