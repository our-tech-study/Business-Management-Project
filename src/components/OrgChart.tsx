import React, { useState } from "react"
import { OrganizationChart } from "primereact/organizationchart"
import TreeNode from "primereact/treenode"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { Typography } from "@mui/material"

const tempData = [
  {
    expanded: true,
    className: "bg-indigo-500 text-white",
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
export default function OrgChart() {
  const [data] = useState<TreeNode[]>(tempData)

  const nodeTemplate = (node: TreeNode) => {
    return (
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid xs={12}>
          <Typography>{node.data.department}</Typography>
        </Grid>
        <Grid>{node.data?.leader}</Grid>
        {node.data?.members && (
          <Grid xs={6}>
            {node.data.members.map(member => (
              <div>{member}</div>
            ))}
          </Grid>
        )}
      </Grid>
    )
  }

  return (
    <div className="card">
      <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
    </div>
  )
}
