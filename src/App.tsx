import { Button, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { Stack } from "@mui/system"
import React, { Component, useEffect, useState } from "react"

import OrgChart from "./components/OrgChart"

function App() {
  return (
    <Grid container>
      <Grid xs={12} justifyContent="space-between">
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid>
            <Stack direction="row" spacing={1}>
              <Button variant="outlined">신규</Button>
              <Button variant="outlined">선택삭제</Button>
              <Button variant="outlined">초기화</Button>
              <Button variant="outlined">설정</Button>
            </Stack>
          </Grid>
          <Grid>
            <Stack spacing={2}>
              <Button variant="outlined">전체보기</Button>
              <Button variant="outlined">팀별로보기</Button>
              <Button variant="outlined">My Profile</Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sx={{ border: "1px solid black", marginTop: "1rem" }}>
        <Grid container>
          <Grid xs={12} sx={{ backgroundColor: "#d0e1fd" }}>
            <Typography align="center">[팀이름] [팀별로보기 모드]</Typography>
          </Grid>
          <Grid xs={12} sx={{ padding: "1rem" }}>
            <OrgChart />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default App
