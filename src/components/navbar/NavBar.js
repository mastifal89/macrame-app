import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Grid from "@mui/material/Grid";
import makeStyles from "@mui/styles/makeStyles";

import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ProfileIcon } from "../ui/ProfileIcon";
import CartIcon from "../ui/CartIcon";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  searchIcon: {
    color: "#000",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  border: "1px solid #ccc",
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
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export function NavBar({ children }) {
  const { currentUser, logout } = useAuth();

  const classes = useStyles();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <Grid item xs>
                <Typography variant="h2" component="div">
                  Macrame
                </Typography>
              </Grid>
              <Grid item xs>
                <Search style={{ textAlign: "center" }}>
                  <SearchIconWrapper>
                    <SearchIcon className={classes.searchIcon} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Buscar..."
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Grid>
              <Grid item xs style={{ textAlign: "right" }}>
                <Grid container direction="row" justifyContent="flex-end">
                  {currentUser ? (
                    <>
                      <Grid item style={{ marginRight: 10 }}>
                        <CartIcon />
                      </Grid>
                      <Grid item>
                        <ProfileIcon logout={logout} />
                      </Grid>
                    </>
                  ) : (
                    <Button component={Link} to="/login" color="inherit">
                      Login
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          {children}
        </Grid>
      </Box>
    </>
  );
}
