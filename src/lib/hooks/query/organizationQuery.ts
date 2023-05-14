import { IOrganizationResponse, fetchOrganization } from "@lib/api/orgApi"
import { useQuery } from "react-query"
import TreeNode from "primereact/treenode"

export function useOrganization() {
  const { data, isLoading } = useQuery(["user"], async () => {
    const { data } = await fetchOrganization()

    const convertedData = convertServerResponseIntoUIResponse(data)
    return convertedData
  })
  return { data, isLoading }
}

function convertServerResponseIntoUIResponse(data: IOrganizationResponse[]): TreeNode[] {
  return data.map(({ department, leader, children, members }) => ({
    expanded: true,
    style: { borderRadius: "12px" },
    data: { department, leader, members },
    children: children ? convertServerResponseIntoUIResponse(children) : undefined,
  }))
}
