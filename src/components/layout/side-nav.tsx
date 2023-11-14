import * as React from "react";
import Drawer from "@mui/material/Drawer";
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from 'next/router';

export default function TemporaryDrawer() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  
  const toggleDrawer =
    (newValue: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        console.log("newValue", newValue);
        console.log("event", event);
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(newValue);
    };
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[{text: "ECM Department", route: "ecm"}, {text: "Other Departments", route: "other"}].map((obj, index) => (
          <ListItem onClick={async (e) => {
            await router.push(
              `/ecm/${obj.route}`,
            );
          }} key={obj.text} disablePadding>
            <ListItemButton>
              <ListItemText primary={obj.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <AppBar position="fixed" color="transparent">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(!open)}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography>Internal Portal</Typography>
          </Toolbar>
        </AppBar>
        <Drawer anchor={"left"} open={open} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
