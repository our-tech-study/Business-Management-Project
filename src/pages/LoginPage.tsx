import { Button, Typography, Grid, Stack, Input } from "@mui/material"
import {theme} from "../styles/theme"
import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-router-dom"
function LoginPage() {

  const [form, setForm] = useState({
    empNo: "",
    pwd: "",
  });

  const onChange = (e) => {
    console.log(e.target.value);
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
    console.log(form);
  };

  const onSubmit = (e) => {
    e.preventDefault(); // 버튼만 누르면 리로드 되는것을 막아줌
    axios
      .post("http://localhost:8080/api/auth/signIn", {
        empNo: form.empNo,
        pwd: form.pwd,
      })
      .then(function (response) {
        // response
        console.log(response);
      })
      .catch(function (error) {
        // error
        console.log(error);
      })
      .then(function () {
        // always
      });
  };

  return (
    <Grid container justifyContent={"center"} alignItems={"center"} sx={{ height: "100vh", width:"100vw",   backgroundColor:theme.colors.white}} >  
      <Grid item sx={{ width:"450px", height : "400px", padding: "50px" ,backgroundColor: theme.colors.secondary.light, border: theme.border.basic, borderRadius: theme.radius.xs }} >
          <Grid item>
            <Form className="loginForm" onSubmit={onSubmit} style={{ padding: 10 }}>
            <Stack spacing={6}>
            <Stack direction="row" spacing={1} alignItems={"center"}>
              <Grid xs={2}></Grid> 
              <Grid xs={4} sx={{fontSize: theme.fontSize.xxl, color: theme.colors.secondary.dark, fontWeight:theme.fontWeight.bold}} >WORK</Grid> 
              <Grid xs={4} sx={{fontSize: theme.fontSize.xxl, color: theme.colors.secondary.base, fontWeight:theme.fontWeight.bold}} >PLACE</Grid> 
              <Grid xs={2}></Grid> 
            </Stack>
            <Input
              id="empNo"
              name="empNo"
              placeholder="사번"
              type="text"
              value={form.empNo}
              required
              onChange={onChange}
              inputProps={{ maxLength: 20}}
            />
            <Input
              id="pwd"
              name="pwd"
              placeholder="비밀번호"
              type="password"
              value={form.pwd}
              required
              onChange={onChange}
              inputProps={{ maxLength: 20}}
            />
            <Button type="submit" variant="outlined" sx={{backgroundColor: theme.colors.primary.dark, fontSize: theme.fontSize.md, color: theme.colors.black}}>
              로그인
            </Button>
            </Stack>
        </Form>
          </Grid>
      </Grid>
    </Grid>
  )
}

export default LoginPage
