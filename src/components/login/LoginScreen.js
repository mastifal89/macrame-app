import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import makeStyles from "@mui/styles/makeStyles";
import { useAuth } from "../../context/AuthContext";
import Spinner from "../ui/Spinner";

const useStyles = makeStyles((theme) => ({
  avatar: {
    alignItems: "center",
  },
}));

export function LoginScreen(props) {
  const classes = useStyles();
  const { login } = useAuth();
  const { setIsLogin, isLogin } = props;
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await login(user.email, user.password);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      className="animate__animated animate__fadeIn"
    >
      <CssBaseline />
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
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography variant="h5">Ingresar</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? <Spinner /> : "Ingresar"}
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Button onClick={() => setIsLogin(!isLogin)} variant="body2">
                  {"No tienes una cuenta? Registrate!"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
