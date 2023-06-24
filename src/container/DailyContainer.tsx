import { IconButton, Menu } from "@mui/material"
import React, { useState, MouseEvent } from "react"
import DeleteIcon from "@mui/icons-material/Delete"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PauseCircleIcon from "@mui/icons-material/PauseCircle"
import StopIcon from "@mui/icons-material/Stop"
import Layer, { ILayerItem } from "@components/Layer"
import { useDaily } from "@lib/hooks/query/dailyQuery"

function DailyContainer() {
  const onStop = () => {
    // 퇴근
  }
  return (
    <div>
      <PlayContainer />
      <PauseContainer />
      <IconButton onClick={onStop}>
        <StopIcon />
      </IconButton>
    </div>
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
    // job 시작 api 호출
    // job -> 다른 job 할때 이전 job 멈춤을 해야하는데 해당 로직은 server에서?
    // client에서 하는 경우 request 한번더 발생
  }

  return (
    <>
      <IconButton onClick={onPlay}>
        <PlayArrowIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={openLayer}
        onClose={onClose}
        anchorOrigin={{
          horizontal: "right",
          vertical: "center",
        }}>
        {daily &&
          daily.map(({ id, status, label }) => (
            <li onClick={() => startJob(id)}>
              {status} {label}
            </li>
          ))}
      </Menu>
    </>
  )
}

function PauseContainer() {
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

  const pauseJob = (jobId: string, reason: string) => {}

  return (
    <>
      <IconButton onClick={onPause}>
        <PauseCircleIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={openLayer}
        onClose={onClose}
        anchorOrigin={{
          horizontal: "right",
          vertical: "center",
        }}>
        <li>휴식</li>
        <li>회의</li>
        <li>기타 사유를 적어주세요</li>
      </Menu>
    </>
  )
}
