import React, { useState } from "react"
import { OrganizationChart } from "primereact/organizationchart"
import TreeNode from "primereact/treenode"
import { Box, Menu, MenuItem, Typography, Grid } from "@mui/material"
import Layer, { ILayerItem } from "./Layer"
import { IMember, MemberIdType } from "@lib/api/orgApi"

// const tempData = [
//   {
//     expanded: true,
//     style: { borderRadius: "12px" },
//     data: {
//       department: "대표",
//       leader: "이대표",
//     },
//     children: [
//       {
//         expanded: true,
//         style: { borderRadius: "12px" },
//         data: {
//           department: "인사팀",
//           leader: "이인사",
//           members: ["이인사1", "이인사2"],
//         },
//       },
//       {
//         expanded: true,
//         style: { borderRadius: "12px" },
//         data: {
//           department: "개발팀",
//           leader: "이개발",
//           members: ["이개발1", "이개발2"],
//         },
//       },
//     ],
//   },
// ]

// https://primereact.org/organizationchart/

interface IOrgChartProps {
  data: any
  onSelectProfile: any
  onSelectSchedule: any
  onSelectPersonnelEvaluationByMember: any
  onSelectPersonnelEvaluationByLeader: any
}
export default function OrgChart({ data, onSelectProfile, onSelectSchedule, onSelectPersonnelEvaluationByMember, onSelectPersonnelEvaluationByLeader }: IOrgChartProps) {
  // const [data] = useState<TreeNode[]>(tempData)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [items, setItems] = useState<null | any>(null)
  const open = Boolean(anchorEl)
  const onMemberClick = (id: MemberIdType, event: React.MouseEvent<HTMLButtonElement>) => {
    const memberLayerItems = [
      { id: "profile", memberId: id, label: "프로필보기" },
      { id: "schedule", memberId: id, label: "일정관리" },
      { id: "evaluationByMember", memberId: id, label: "인사평가(팀원)" },
    ]
    setItems(memberLayerItems)
    setAnchorEl(event.currentTarget)
  }

  const onLeaderClick = (id: MemberIdType, event: React.MouseEvent<HTMLButtonElement>) => {
    const leaderLayerItems = [
      { id: "profile", memberId: id, label: "프로필보기" },
      { id: "schedule", memberId: id, label: "일정관리" },
      { id: "evaluationByLeader", memberId: id, label: "인사평가(팀장)" },
    ]
    setItems(leaderLayerItems)
    setAnchorEl(event.currentTarget)
  }
  const onClose = () => {
    setAnchorEl(null)
  }

  const onSelect = (item: ILayerItem) => {
    const { id, memberId } = item
    switch (id) {
      case "profile":
        onSelectProfile(memberId)
        break
      case "schedule":
        onSelectSchedule(memberId)
        break
      case "evaluationByMember":
        onSelectPersonnelEvaluationByMember(memberId)
        break
      case "evaluationByLeader":
        onSelectPersonnelEvaluationByLeader(memberId)
        break
    }
  }
  const nodeTemplate = (node: TreeNode) => {
    return <OrganizationNode data={node.data} onMemberClick={onMemberClick} onLeaderClick={onLeaderClick} />
  }

  return (
    <div className="card">
      <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
      {items && <Layer anchorEl={anchorEl} items={items} onClose={onClose} onSelect={onSelect} open={open} />}
    </div>
  )
}

interface IOrganizationNodeProps {
  data: {
    department: string
    leader?: IMember
    members?: IMember[]
  }
  onLeaderClick: any
  onMemberClick: any
}
function OrganizationNode({ data, onMemberClick, onLeaderClick }: IOrganizationNodeProps) {
  const { department, leader, members } = data

  const onLocalLeaderClick = e => {
    onLeaderClick(leader?.id, e)
  }
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sx={{ borderBottom: "1px solid black" }}>
        <Typography>{department}</Typography>
      </Grid>
      <Grid item>
        <Box onClick={onLocalLeaderClick}>{leader?.name}</Box>
      </Grid>
      {members && (
        <Grid item xs={6}>
          {members.map(member => (
            <Member key={member.id} member={member} onMemberClick={onMemberClick} />
          ))}
        </Grid>
      )}
    </Grid>
  )
}

function Member({ member, onMemberClick }: any) {
  const onLocalMemberClick = e => {
    onMemberClick(member.id, e)
  }
  return (
    <Box sx={{ marginY: 1 }} onClick={onLocalMemberClick}>
      {member.name}
    </Box>
  )
}
