import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { makeStyles } from "@mui/styles";
import CardItem from "./Card";
import { Typography } from "@mui/material";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import { db } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

export const CardContainer = () => {
  const classes = useStyles();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsCol = collection(db, "products");
    const fetchData = async () => {
      const productSnapshot = await getDocs(productsCol);
      const productList = productSnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setItems(productList);
    };
    fetchData();
  }, [])
  
  return (
    <Grid
      direction="column"
      container
      spacing={2}
      className={classes.cardContainer}
      sx={{
        flexGrow: 1,
      }}
    >
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <LocalShippingIcon color="secondary" className={classes.icon} />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Envios a todo el pais
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <CarpenterIcon color="secondary" className={classes.icon} />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Diseños personalizados
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <CreditScoreIcon color="secondary" className={classes.icon} />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Todos los medios de pago
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" spacing={3}>
          {items && items.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CardItem item={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
