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
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";

export default function TemporaryDrawer() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {[
          { text: "Home", route: "" },
          { text: "ECM Department", route: "ecm" },
          { text: "Other Departments", route: "other" },
        ].map((obj) => (
          <ListItem
            onClick={async () => {
              await router.push(`/${obj.route}`);
            }}
            key={obj.text}
            disablePadding
          >
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
              onClick={toggleDrawer}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography>Internal Portal</Typography>
          </Toolbar>
        </AppBar>
        <Drawer anchor={"left"} open={open} onClose={toggleDrawer}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
