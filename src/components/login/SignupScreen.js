import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Card,
  Grid,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import makeStyles from "@mui/styles/makeStyles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import { useAuth } from "../../context/AuthContext";
import Spinner from "../ui/Spinner";

const useStyles = makeStyles((theme) => ({
  avatar: {
    alignItems: "center",
    alignContent: "center",
  },
}));

export const SignupScreen = (props) => {
  const { signup } = useAuth();
  const { setIsLogin, isLogin } = props;

  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await signup(userData.name, userData.email, userData.password);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      className="animate__animated animate__fadeIn"
    >
      <Card
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mx: "2px",
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <Grid container justifyContent="center" direction="row">
            <Grid item style={{ textAlign: "center" }}>
              <Grid container direction="column">
                <Grid item>
                  <Avatar
                    sx={{ m: 3, bgcolor: "secondary.main" }}
                    className={classes.avatar}
                  >
                    <LockOutlinedIcon className={classes.avatar} />
                  </Avatar>
                  <Typography variant="h5">Registrarse</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box component={"form"} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nombre"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={handleOnChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Dirección de correo electrónico"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleOnChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleOnChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? <Spinner /> : "Registrarse"}
            </Button>
            <Grid
              container
              styles={{ marginTop: "1em" }}
              justifyContent="center"
            >
              <Grid item>
                <Button onClick={() => setIsLogin(!isLogin)} variant="body3">
                  {"Ya tienes una cuenta? Inicia sesión"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};
