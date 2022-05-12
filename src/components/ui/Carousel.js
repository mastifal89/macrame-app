import React from "react";
import macrame3 from "../../assets/macrame3.jpeg";
import macrame5 from "../../assets/macrame5.jpeg";
import macrame6 from "../../assets/macrame6.jpeg";
import makeStyles from "@mui/styles/makeStyles";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  image: {
    [theme.breakpoints.down("xs")]: {
      height: "10vh",
      overflow: "hidden",
    },
    [theme.breakpoints.up("md")]: {
      height: "40vh",
      overflow: "hidden",
    },
    [theme.breakpoints.down("md")]: {
        height: "30vh",
        overflow: "hidden",
    }
  },
}));

let items = [
  {
    label: 1,
    imageUrl: macrame5,
  },
  {
    label: 2,
    imageUrl: macrame6,
  },
  {
    label: 3,
    imageUrl: macrame3,
  },
];

function CarouselUtil() {
  const theme = useTheme();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {items.map((step, index) => (
          <div key={step.label} className={classes.image}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                key={step.label}
                component="img"
                sx={{
                  height: "400px",
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imageUrl}
                alt={step.label}
                className={classes.image}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default CarouselUtil;
