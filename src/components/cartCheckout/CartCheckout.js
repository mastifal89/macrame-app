import { Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { NavBar } from "../navbar/NavBar";
import { Item } from "./Item";
import { Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CartContext from "../../context/Cart/CartContext";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";

export const CartCheckout = () => {
  const { cartItems } = useContext(CartContext);

  const matches = useMediaQuery("(min-width:800px)");

  return (
    <>
      <NavBar />
      <div style={{ margin: 20 }}>
        <Card>
          <Grid container style={{ margin: 20 }}>
            <Typography variant="h2">Carrito</Typography>
            <Grid container direction="row">
              <Grid
                item
                xs={8}
                style={{ borderRight: "0.1em solid black", padding: 10 }}
              >
                <Grid container direction="row" justifyContent="space-around">
                  <Grid item xs={2} justifyContent="center">
                    <Typography style={{ fontWeight: 600 }} align="left">Producto</Typography>
                  </Grid>
                  <Grid item xs={2} justifyContent="center">
                    <Typography style={{ fontWeight: 600 }} align="center">
                    </Typography>
                  </Grid>
                  <Grid item xs={2} justifyContent="center">
                    <Typography style={{ fontWeight: 600 }} align="center">
                      Cantidad
                    </Typography>
                  </Grid>
                  <Grid item xs={2} justifyContent="center">
                    <Typography style={{ fontWeight: 600 }} align="center">
                      Precio
                    </Typography>
                  </Grid>
                  <Grid item xs={2} justifyContent="center">
                  </Grid>
                </Grid>
                <div style={{ margin: 10 }}>
                  {cartItems &&
                    cartItems.map((item) => <Item key={item.id} item={item} />)}
                </div>
                <Divider style={{ marginTop: 70 }} />
                <Grid
                  container
                  direction={matches ? "row" : "column"}
                  justifyContent="space-between"
                  alignItems="center"
                  style={{ marginTop: 30 }}
                >
                  <Button
                    type="button"
                    variant="outlined"
                    startIcon={<ArrowBackOutlinedIcon />}
                    sx={!matches ? { marginBottom: 2 } : {}}
                  >
                    Continuar comprando
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    endIcon={<ArrowForwardOutlinedIcon />}
                  >
                    Finalizar Compra
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Typography style={{ marginLeft: 10 }}>Total</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </div>
    </>
  );
};
