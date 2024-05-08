import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const listButtonStyle = { paddingBlock: 0 };
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
      <ListItemButton sx={listButtonStyle}>
        <ListItemText primary="Sent mail" />
      </ListItemButton>

      <ListItemButton sx={listButtonStyle}>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton sx={listButtonStyle} onClick={handleClick}>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4, ...listButtonStyle }}>
            <ListItemText primary="Starred 1" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4, ...listButtonStyle }}>
            <ListItemText primary="Starred 2" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4, ...listButtonStyle }}>
            <ListItemText primary="Starred 3" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4, ...listButtonStyle }}>
            <ListItemText primary="Starred 4" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};
export default SidebarList;
