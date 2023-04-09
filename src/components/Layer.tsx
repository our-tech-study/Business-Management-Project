import { Menu, MenuItem } from "@mui/material"
import React from "react"

interface ILayerProps {
  open: boolean
  onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void
  onSelect: (id: string) => void
  anchorEl: HTMLElement | null
  items: ILayerItem[]
}
function Layer({ open, onClose, onSelect, anchorEl, items }: ILayerProps) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        horizontal: "right",
        vertical: "center",
      }}>
      {items.map(item => (
        <LayerItem item={item} onSelect={onSelect} />
      ))}
    </Menu>
  )
}

interface ILayerItem {
  id: string
  label: string
}
interface ILayerItemProps {
  item: ILayerItem
  onSelect: (id: string) => void
}
function LayerItem({ item, onSelect }: ILayerItemProps) {
  const { id, label } = item
  const onClick = () => {
    onSelect(id)
  }
  return <MenuItem onClick={onClick}>{label}</MenuItem>
}

export default Layer
