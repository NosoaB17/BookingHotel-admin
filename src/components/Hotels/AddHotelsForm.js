import { FormControl, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import FormButton from "../FormButton";
import { useState } from "react";

function AddHotelsForm() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [province, setProvince] = useState("");
  const [kinds, setKinds] = useState("");

  const setEnteredName = (e) => {
    setName(e.target.value);
  };
  const setEnteredAddress = (e) => {
    setAddress(e.target.value);
  };
  const setEnteredDescription = (e) => {
    setDescription(e.target.value);
  };
  const setEnteredProvince = (e) => {
    setProvince(e.target.value);
  };
  const setEnteredKinds = (e) => {
    setKinds(e.target.value);
  };

  const onSubmit = (data) => {
    fetch("http://localhost:5000/api/admin/system/hotel", {
      method: "POST",
      crossDomain: true,
      headers: {
        Authorization: `Bearer $eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGU1OWRiYTE2MmYwMGEzM2VmNzI4OSIsImlhdCI6MTY3ODI2Nzg0NywiZXhwIjoxNjc4MjcxNDQ3fQ.pb4OhBwMPLfi7cct8Z-6mh63iJqRco_P61_C1Opfnos}`,
        body: JSON.stringify({
          name,
          address,
          description,
          province,
          kinds,
        }),
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((res) => {
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
              onChange={setEnteredName}
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
              onChange={setEnteredDescription}
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
              onChange={setEnteredAddress}
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
              onChange={setEnteredProvince}
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
              onChange={setEnteredKinds}
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
