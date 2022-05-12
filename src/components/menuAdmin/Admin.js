import React, { useState, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import { AddProduct } from "./AddProduct";
import { ListItems } from "./ListItems";
import makeStyles from "@mui/styles/makeStyles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    padding: theme.spacing(2),
  },
}));

export function Admin(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [text, setText] = useState("Agregar productos");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (text, index) => {
    setText(text);
    setSelectedMenu(index);
  };

  const renderSwitch = useCallback(() => {
    switch (selectedMenu) {
      case 0:
        return <AddProduct />;
      case 1:
        return <ListItems />;
      default:
        break;
    }
  }, [selectedMenu]);

  const drawer = (
    <div>
      <Grid container position="fixed">
        <Grid item>
          <Typography
            variant="h5"
            style={{ marginLeft: "30px", marginTop: "10px" }}
          >
            Macrame
          </Typography>
        </Grid>
      </Grid>
      <Toolbar />
      <Divider />
      <List>
        {["Agregar productos", "Lista productos"].map(
          (text, index) => (
            <ListItem
              button
              key={text}
              onClick={() => handleClick(text, index)}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <AddIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h7" noWrap component="div">
            {text}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
          container
          className={classes.contentContainer}
        >
          <Grid item>{renderSwitch()}</Grid>
        </Grid>
      </Box>
    </Box>
  );
}
