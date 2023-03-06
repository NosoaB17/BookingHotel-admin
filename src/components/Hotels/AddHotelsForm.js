import { FormControl, Grid, TextField, Typography} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import FormButton from "../FormButton";
import { useState,useEffect } from "react";

function AddHotelsForm() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [features, getFeatures] = useState([]);

   useEffect(() => {
     loadFeatures();
   }, []);

   const loadFeatures = async () => {
     const result = await axios.get(
       "http://localhost:5000/api/hotelFeature/all");
     console.log(result.data1);
     getFeatures(result.data1);
  };
  
  const config = {
    headers: {
      Authorization: `Bearer $eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGUxZmEwNTcwYjg5NDBhZjI1NWU3OSIsImlhdCI6MTY3ODA5NDI3NCwiZXhwIjoxNjc4MDk3ODc0fQ.mZetqiU0wqW5z489KGYD1zGNVsGOrV2G8w4IyUxO51g}`,
    },
  };

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/admin/system/hotel", data, config)
      .then((res) => {
        if (res?.data) {
          Swal.fire({
            icon: "success",
            title: "New Hotel Added",
            showConfirmButton: false,
            timer: 1500,
          }).then((res) => {
            navigate("/hotels");
          });
        }
      });
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* hotel name and Province  */}
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        sx={{ marginBottom: 3 }}
      >
        <Grid item xs={4} sm={8} md={12} lg={12}>
          <FormControl variant="filled" sx={{ width: "100%" }}>
            <Typography sx={{ marginBottom: 1 }}>Hotel Name</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Hotel Name"
              color="success"
              {...register("name")}
            />
          </FormControl>
        </Grid>
      </Grid>

      {/* hotel description   */}
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        sx={{ marginBottom: 3 }}
      >
        <Grid item xs={4} sm={8} md={12} lg={12}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginBottom: 1 }}>Hotel Description</Typography>
            <textarea
              placeholder="Hotel Description"
              className="textArea"
              {...register("description")}
            ></textarea>
          </Box>
        </Grid>
      </Grid>

      {/* hotel address */}
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        sx={{ marginBottom: 3 }}
      >
        <Grid item xs={4} sm={8} md={6} lg={6}>
          <FormControl variant="filled" sx={{ width: "100%" }}>
            <Typography sx={{ marginBottom: 1 }}>Hotel Address</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Hotel Address"
              color="success"
              {...register("address")}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4} sm={8} md={6} lg={6}>
          <FormControl variant="filled" sx={{ width: "100%" }}>
            <Typography sx={{ marginBottom: 1 }}>Hotel Province</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Hotel Province"
              color="success"
              {...register("province")}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4} sm={8} md={6} lg={6}>
          <FormControl variant="filled" sx={{ width: "100%" }}>
            <Typography sx={{ marginBottom: 1 }}>Hotel Kinds</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Hotel Kinds"
              color="success"
              {...register("kinds")}
            />
          </FormControl>
        </Grid>
      </Grid>


      {/* buttons  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          height: "100%",
        }}
      >
        <FormButton text="Add Hotel" />
      </Box>
    </form>
  );
}

export default AddHotelsForm;
