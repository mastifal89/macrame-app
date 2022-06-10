import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import makeStyles from "@mui/styles/makeStyles";
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

const useStyles = makeStyles((theme) => ({
  image: {
    width: "5em",
    objectFit: "cover",
  },
  typography: {
    fontSize: "10rem",
  },
  select: {
    width: "5em",
    height: "3em",
    alignSelf: "center",
  }
}));

export const Item = (props) => {
  const classes = useStyles();

  const [quantity, setQuantity] = useState();

  const { item } = props;

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Grid container direction="row" style={{ marginBottom: 10 }}>
      <Grid item xs>
        <img src={item.image} alt={item.name} className={classes.image} />
      </Grid>
      <Grid item container direction="column" justifyContent="center" xs>
        <Typography sx={{ fontSize: 15 }} align="left" className={classes.typography}>{item.name}</Typography>
      </Grid>
      <Grid item container direction="column" justifyContent="center" xs>
        <Select
          value={quantity}
          onChange={handleChange}
          label="Cantidad"
          defaultValue={item.quantity}
          variant="outlined"
          className={classes.select}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </Grid>
      <Grid item container direction="column" justifyContent="center" xs>
        <Typography sx={{ fontSize: 15, fontWeight: 600 }} align="center" className={classes.typography}>${item.price}</Typography>
      </Grid>
      <Grid item container direction="row" justifyContent="flex-end" alignItems="center" xs>
        <DeleteForeverTwoToneIcon sx={{ color: "red", marginRight: 2, fontSize: 28 }}/>
      </Grid>
    </Grid>
  );
};
