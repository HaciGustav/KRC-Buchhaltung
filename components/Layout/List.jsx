import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const listButtonStyle = {
  paddingBlock: 1,
  boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 1px",
};
const SidebarList = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
    >
      {/* <ListItemButton sx={listButtonStyle}>
        <ListItemText primary="Sent mail" />
      </ListItemButton>

      <ListItemButton sx={listButtonStyle}>
        <ListItemText primary="Drafts" />
      </ListItemButton> */}
      <ListItemButton sx={listButtonStyle} onClick={handleClick}>
        <ListItemText primary="Formulare" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton href="/anmeldung" sx={{ pl: 4, ...listButtonStyle }}>
            <ListItemText primary="Anmeldung" />
          </ListItemButton>
          <ListItemButton href="/abmeldung" sx={{ pl: 4, ...listButtonStyle }}>
            <ListItemText primary="Abmeldung" />
          </ListItemButton>
          <ListItemButton href="/aenderung" sx={{ pl: 4, ...listButtonStyle }}>
            <ListItemText primary="Änderung" />
          </ListItemButton>
          <ListItemButton href="/storno" sx={{ pl: 4, ...listButtonStyle }}>
            <ListItemText primary="Stornierung" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};
export default SidebarList;
