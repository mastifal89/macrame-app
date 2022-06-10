import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { makeStyles } from "@mui/styles";
import CartContext from "../../context/Cart/CartContext";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "grey",
  },
  buttonAdd: {
    color: "#000",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default function CardItem(props) {
  const { addToCart } = useContext(CartContext);
  const { item } = props;
  const { image, price } = item;

  const classes = useStyles();

  const handleAddToCart = () => {
    addToCart(item);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
      </CardContent>
      <CardActions className={classes.buttonContainer}>
        <Typography variant="body2" color="text.secondary">
          $ {price}
        </Typography>
        <Button onClick={handleAddToCart} size="small" className={classes.buttonAdd}>
          <Typography variant="h6">Agregar al carrito</Typography>
          <AddShoppingCartIcon className={classes.button} />
        </Button>
      </CardActions>
    </Card>
  );
}
