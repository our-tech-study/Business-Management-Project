import React from "react"
import { Button, Typography, Grid, Stack } from "@mui/material"
import OrgChart from "@components/OrgChart"
import OrgChartContainer from "@container/OrgChartContainer"
function MainPage() {
  return (
    <Grid container>
      <Grid item xs={12} justifyContent="space-between">
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item>
            <Stack direction="row" spacing={1}>
              <Button variant="outlined">신규</Button>
              <Button variant="outlined">선택삭제</Button>
              <Button variant="outlined">초기화</Button>
              <Button variant="outlined">설정</Button>
            </Stack>
          </Grid>
          <Grid item>
            <Stack spacing={2}>
              <Button variant="outlined">전체보기</Button>
              <Button variant="outlined">팀별로보기</Button>
              <Button variant="outlined">My Profile</Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ border: "1px solid black", marginTop: "1rem" }}>
        <Grid container>
          <Grid item xs={12} sx={{ backgroundColor: "#d0e1fd" }}>
            <Typography align="center">[팀이름] [팀별로보기 모드]</Typography>
          </Grid>
          <Grid item xs={12} sx={{ padding: "1rem" }}>
            <OrgChartContainer />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MainPage
