import { Menu, MenuItem } from "@mui/material"
import React from "react"

interface ILayerProps {
  open: boolean
  onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void
  onSelect: (item: ILayerItem) => void
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
        <LayerItem key={item.id} item={item} onSelect={onSelect} />
      ))}
    </Menu>
  )
}

export interface ILayerItem {
  id: string
  label: string
  [key: string]: any
}
interface ILayerItemProps {
  item: ILayerItem
  onSelect: (item: ILayerItem) => void
}
function LayerItem({ item, onSelect }: ILayerItemProps) {
  const { id, label } = item
  const onClick = () => {
    onSelect(item)
  }
  return <MenuItem onClick={onClick}>{label}</MenuItem>
}

export default Layer
