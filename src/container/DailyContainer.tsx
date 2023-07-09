import React, { useState, MouseEvent } from "react"
import { useDispatch } from "react-redux"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PauseCircleIcon from "@mui/icons-material/PauseCircle"
import StopIcon from "@mui/icons-material/Stop"
import { useDaily, useDailyMutation } from "@lib/hooks/query/dailyQuery"
import { Button, Divider, List, ListItem, ListItemButton, ListItemText, Box, Grid, Menu, Paper, IconButton, Typography, ListItemIcon } from "@mui/material"
import { showAlert } from "@store/root"
import { createJob } from "@lib/api/dailyApi"

function DailyContainer() {
  const [currentJobId, setCurrentJobId] = useState<string | null>(null)

  return (
    <Box>
      <Grid container></Grid>
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
        <Grid container justifyContent={"space-around"} alignItems={"center"}>
          <Grid item>
            <PlayContainer />
          </Grid>
          <Grid item>
            <PauseContainer jobId={currentJobId} />
          </Grid>
          <Grid item>
            <StopContainer />
          </Grid>
        </Grid>
        <DailyJobContainer />
      </Paper>
    </Box>
  )
}

function DailyJobContainer() {
  const [label, setLabel] = useState("")
  const dailyJobMutation = useDailyMutation()

  const onCreateJob = () => {
    dailyJobMutation.mutate({ label })
  }

  const onChangeLabel = e => {
    setLabel(e.target.value)
  }
  return (
    <>
      <input onChange={onChangeLabel} value={label} />
      <Button onClick={onCreateJob}>잡 생성</Button>
    </>
  )
}
export default DailyContainer

function PlayContainer() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [openLayer, setOpenLayer] = useState(false)
  const { data: daily, isLoading } = useDaily()

  const onOpen = () => {
    setOpenLayer(true)
  }

  const onClose = () => {
    setOpenLayer(false)
  }

  // query로 가져오기
  const onPlay = (e: MouseEvent) => {
    // 출근 체크
    // 진행중인 잡 1개인 경우 바로 시작 / N개인 경우 Layer로 리스트 표현
    if (daily && daily.length === 1) {
      // 잡 시작
      const jobId = daily[0].id
      startJob(jobId)
    } else {
      setAnchorEl(e.target as any)
      onOpen()
    }
  }

  const startJob = (jobId: string) => {
    onClose()
    // job 시작 api 호출
    // job -> 다른 job 할때 이전 job 멈춤을 해야하는데 해당 로직은 server에서?
    // client에서 하는 경우 request 한번더 발생
  }

  return (
    <>
      <IconButton onClick={onPlay}>
        <PlayArrowIcon />
        <Typography>시작</Typography>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={openLayer}
        onClose={onClose}
        anchorOrigin={{
          horizontal: "right",
          vertical: "center",
        }}>
        <List>
          {daily &&
            daily.map(({ id, status, label }) => (
              <>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => startJob(id)}>
                    <ListItemIcon>{status}</ListItemIcon>
                    <ListItemText primary={label} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            ))}
        </List>
      </Menu>
    </>
  )
}

interface IJobPauseReason {
  reason: "휴식" | "회의" | "기타"
  description?: string
}
const pauseReasons: IJobPauseReason[] = [{ reason: "휴식" }, { reason: "회의" }, { reason: "기타", description: "사유를 적어주세요" }]
interface IPauseContainerProps {
  jobId: string | null
}
function PauseContainer({ jobId }: IPauseContainerProps) {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [openLayer, setOpenLayer] = useState(false)

  const onOpen = () => {
    setOpenLayer(true)
  }

  const onClose = () => {
    setOpenLayer(false)
  }

  // query로 가져오기
  const onPause = (e: MouseEvent) => {
    setAnchorEl(e.target as any)
    onOpen()

    // 진행중인 잡 1개인 경우 바로 시작 / N개인 경우 Layer로 리스트 표현
  }

  const pauseJob = (reason: string, description?: string) => {
    onClose()

    if (jobId === null) {
      dispatch(showAlert({ type: "announcement", description: "진행중인 잡이 없습니다." }))
      return
    }
    // 잡 중지 사유 기록
  }

  return (
    <>
      <IconButton onClick={onPause}>
        <PauseCircleIcon />
        <Typography>정지</Typography>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={openLayer}
        onClose={onClose}
        anchorOrigin={{
          horizontal: "right",
          vertical: "center",
        }}>
        <List>
          {pauseReasons.map(({ reason, description }) => (
            <>
              <ListItem disablePadding>
                <ListItemButton onClick={() => pauseJob(reason, description)}>
                  <ListItemText primary={reason} />
                  {description && <ListItemText primary={description} sx={{ ml: 1 }} />}
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Menu>
    </>
  )
}

function StopContainer() {
  const onStop = () => {
    // 퇴근
  }
  return (
    <IconButton onClick={onStop}>
      <StopIcon />
      <Typography>완료</Typography>
    </IconButton>
  )
}
