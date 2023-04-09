import React, { useState } from "react"
import { OrganizationChart } from "primereact/organizationchart"
import TreeNode from "primereact/treenode"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { Box, Menu, MenuItem, Typography } from "@mui/material"
import Layer from "./Layer"

const tempData = [
  {
    expanded: true,
    // className: "bg-indigo-500 text-white",
    style: { borderRadius: "12px" },
    data: {
      department: "대표",
      leader: "이대표",
      // image: "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
      // name: "Amy Elsner",
      // title: "CEO",
    },
    children: [
      {
        expanded: true,
        // className: "text-white",
        style: { borderRadius: "12px" },
        data: {
          department: "인사팀",
          leader: "이인사",
          members: ["이인사1", "이인사2"],
          // image: "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
          // name: "Anna Fali",
          // title: "CMO",
        },
        // children: [
        //   {
        //     label: "Sales",
        //     className: "bg-purple-500 text-white",
        //     style: { borderRadius: "12px" },
        //   },
        //   {
        //     label: "Marketing",
        //     className: "bg-purple-500 text-white",
        //     style: { borderRadius: "12px" },
        //   },
        // ],
      },
      {
        expanded: true,
        // className: "text-white",
        style: { borderRadius: "12px" },
        data: {
          department: "개발팀",
          leader: "이개발",
          members: ["이개발1", "이개발2"],
        },
      },
    ],
  },
]

const commonLayerItems = [
  { id: "profile", label: "프로필보기" },
  { id: "schedule", label: "일정관리" },
]
const leaderLayerItems = commonLayerItems.concat({ id: "evaluationByLeader", label: "인사평가(팀장)" })
const memberLayerItems = commonLayerItems.concat({ id: "evaluationByMember", label: "인사평가(팀원)" })
// https://primereact.org/organizationchart/
export default function OrgChart() {
  const [data] = useState<TreeNode[]>(tempData)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [items, setItems] = useState(leaderLayerItems)
  const open = Boolean(anchorEl)
  const onMemberClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setItems(memberLayerItems)
    setAnchorEl(event.currentTarget)
  }

  const onLeaderClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setItems(leaderLayerItems)
    setAnchorEl(event.currentTarget)
  }
  const onClose = () => {
    setAnchorEl(null)
  }

  const onSelect = () => {}
  const nodeTemplate = (node: TreeNode) => {
    return <OrganizationNode data={node.data} onMemberClick={onMemberClick} onLeaderClick={onLeaderClick} />
  }

  return (
    <div className="card">
      <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
      <Layer anchorEl={anchorEl} items={items} onClose={onClose} onSelect={onSelect} open={open} />
    </div>
  )
}

interface IOrganizationNodeProps {
  data: {
    department: string
    leader?: string
    members?: string[]
  }
  onLeaderClick: any
  onMemberClick: any
}
function OrganizationNode({ data, onMemberClick, onLeaderClick }: IOrganizationNodeProps) {
  const { department, leader, members } = data

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid xs={12} sx={{ borderBottom: "1px solid black" }}>
        <Typography>{department}</Typography>
      </Grid>
      <Grid>
        <Box onClick={onLeaderClick}>{leader}</Box>
      </Grid>
      {members && (
        <Grid xs={6}>
          {members.map(member => (
            <Box sx={{ marginY: 1 }} onClick={onMemberClick}>
              {member}
            </Box>
          ))}
        </Grid>
      )}
    </Grid>
  )
}
