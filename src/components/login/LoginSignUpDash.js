import React, { useState, useEffect } from "react";
import { LoginScreen } from "./LoginScreen";
import { SignupScreen } from "./SignupScreen";
import makeStyles from "@mui/styles/makeStyles";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundImage: `url(${require("../../assets/macrame-background.jpeg")})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    overflow: "auto",
  },
}));

export const LoginSignUpDash = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      } else {
        console.log("user is not signed in");
      }
    });
  }, []);

  return (
    <div className={classes.mainContainer}>
      {isLogin ? (
        <LoginScreen setIsLogin={setIsLogin} isLogin={isLogin} />
      ) : (
        <SignupScreen setIsLogin={setIsLogin} isLogin={isLogin} />
      )}
    </div>
  );
};
