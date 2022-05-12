import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Alert } from "@mui/material";
import { AlertTitle } from "@mui/material";
import { LinearProgressWithLabel } from "../ui/LinearProgress";
import { useForm } from "../../hooks/useForm";
import { storage, db } from "../../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

export const AddProduct = () => {

  const [values, handleInputChange, reset] = useForm({
    name: "",
    price: "",
    description: "",
    stock: "",
    image: "",
  });

  const [image, setImage] = useState(null);
  const [imageUrlPreview, setImageUrlPreview] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);

  useEffect(() => {
    if (image) {
      setImageUrlPreview(URL.createObjectURL(image));
    }
  }, [image]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    const storageRef = ref(storage, `files/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        setUploading(false);
        setImageUrlPreview(null);
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          try {
            addDoc(collection(db, "products"), {
              name: values.name,
              price: values.price,
              description: values.description,
              stock: values.stock,
              image: downloadUrl,
            });
          } catch (error) {
            setUploading(false);
            setImageUrlPreview(null);
            console.log(error);
          }
          setUploading(false);
          setImageUrlPreview(null);
          handleAlert();
          reset();
        });
      }
    );
  };

  const handleAlert = () => {
    setAlertSuccess(true);
    setTimeout(() => {
      setAlertSuccess(false);
    }, 3000);
  };

  return (
    <Grid container className="animate__animated animate__fadeIn">
      <CssBaseline />
      <Card
        sx={{
          marginTop: 8,
          display: "flex",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className="animate__animated animate__fadeIn"
          >
            Agregar Producto
          </Typography>
          <form
            onSubmit={handleSubmit}
            className="animate__animated animate__fadeIn"
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  value={values.name}
                  id="name"
                  name="name"
                  label="Nombre"
                  fullWidth
                  autoComplete="nombre"
                  autoFocus
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  value={values.description}
                  id="description"
                  name="description"
                  label="Descripción"
                  fullWidth
                  autoComplete="descripción"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  value={values.price}
                  id="price"
                  name="price"
                  label="Precio"
                  fullWidth
                  autoComplete="10"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  value={values.stock}
                  id="stock"
                  name="stock"
                  label="Stock"
                  fullWidth
                  autoComplete="10"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={6}>
                <input
                  accept="image/*"
                  id="select-image"
                  type="file"
                  name="image"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    handleInputChange({
                      target: {
                        name: "image",
                        value: e.target.files[0],
                      },
                    });
                  }}
                />
                <label htmlFor="select-image">
                  <Button variant="contained" color="primary" component="span">
                    Subir imagen
                  </Button>
                </label>
              </Grid>
              {imageUrlPreview && image && (
                <Grid item xs={6}>
                  <img
                    src={imageUrlPreview}
                    alt="preview"
                    style={{ width: "80px" }}
                  />
                </Grid>
              )}
            </Grid>
            <Button
              disabled={uploading}
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className="animate__animated animate__fadeIn"
              style={{ marginTop: "30px" }}
            >
              Agregar producto
            </Button>
            {uploading && (
              <Box sx={{ width: "100%", marginTop: "20px" }}>
                <LinearProgressWithLabel value={progresspercent} />
              </Box>
            )}
            {alertSuccess && (
              <Alert
                severity="success"
                sx={{ marginTop: "20px" }}
                className={
                  alertSuccess
                    ? "animate__animated animate__fadeIn"
                    : "animate__animated animate__fadeOut"
                }
              >
                <AlertTitle>Producto agregado</AlertTitle>
                El producto se cargó con éxito
              </Alert>
            )}
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};
