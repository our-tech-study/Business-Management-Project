import { Menu } from "@mui/material"
import React, { useState } from "react"

interface IUseLayerProps {
  children: React.ReactElement | React.ReactElement[]
}

function useLayer({ children }) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [open, setOpen] = useState(false)

  const onOpen = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const setAnchorElement = (element: HTMLElement) => {
    setAnchorEl(element)
  }

  return {
    onOpen,
    onClose,
    setAnchorElement,
    // Layer,
  }
}

interface ILayerProps {
  open: boolean
  onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void
  anchorEl: HTMLElement | null
  children: React.ReactElement | React.ReactElement[]
}
function Layer({ open, onClose, anchorEl, children }: ILayerProps) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        horizontal: "right",
        vertical: "center",
      }}>
      {children}
    </Menu>
  )
}
export default useLayer
