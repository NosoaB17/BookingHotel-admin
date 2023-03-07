import { FormControl, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import FormButton from "../FormButton";
import { useState } from "react";

function UpdateHotelsForm({ id }) {
  const [hotelData, setHotelsData] = useState({});
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

   const config = {
     headers: {
       Authorization: `Bearer $eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGUxZmEwNTcwYjg5NDBhZjI1NWU3OSIsImlhdCI6MTY3ODA5NDI3NCwiZXhwIjoxNjc4MDk3ODc0fQ.mZetqiU0wqW5z489KGYD1zGNVsGOrV2G8w4IyUxO51g}`,
     },
  };
  
  const onSubmit = (data) => {
    axios
      .patch(`http://localhost:5000/api/admin/hotel/:hotelId`, data, config)
      .then((res) => {
        if (res?.data) {
          Swal.fire({
            icon: "success",
            title: "Updated Done!!",
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
      {/* hotel name and code  */}
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        sx={{ marginBottom: 3 }}
      >
        <Grid item xs={4} sm={8} md={12} lg={12}>
          <FormControl variant="filled" sx={{ width: "100%" }}>
            <Typography sx={{ marginBottom: 1 }}>Hotel Name</Typography>
            <input
              className="input"
              placeholder="Hotel Name"
              defaultValue={hotelData?.name}
              {...register("name")}
            />
          </FormControl>
        </Grid>
      </Grid>

      {/* hotel address   */}
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        sx={{ marginBottom: 3 }}
      >
        <Grid item xs={4} sm={8} md={12} lg={12}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ marginBottom: 1 }}>Hotel Address</Typography>
            <textarea
              placeholder="Hotel Address"
              className="textArea"
              defaultValue={hotelData?.address}
              {...register("address")}
            ></textarea>
          </Box>
        </Grid>
      </Grid>

      {/* hotel telephone and button */}
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        sx={{ marginBottom: 3 }}
      >
        <Grid item xs={4} sm={8} md={6} lg={6}>
          <FormControl variant="filled" sx={{ width: "100%" }}>
            <Typography sx={{ marginBottom: 1 }}>Hotel Telephone</Typography>
            <input
              className="input"
              placeholder="Hotel Telephone"
              defaultValue={hotelData?.telephone}
              {...register("telephone")}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4} sm={8} md={6} lg={6}>
          <FormControl variant="filled" sx={{ width: "100%" }}>
            <Typography sx={{ marginBottom: 1 }}>Hotel Code</Typography>
            <input
              className="input"
              placeholder="Hotel Code"
              defaultValue={hotelData?.code}
              {...register("code")}
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
        <FormButton text="Update Hotel" />
      </Box>
    </form>
  );
}

export default UpdateHotelsForm;
