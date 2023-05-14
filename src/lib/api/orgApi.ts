import { API_URL, http } from "."
// axios 사용 숨기기
import { AxiosResponse } from "axios"
export interface IOrganizationResponse {
  department: string
  leader: IMember
  members?: IMember[]
  children?: IOrganizationResponse[]
}

export type MemberIdType = string
export interface IMember {
  id: MemberIdType
  name: string
}
export const fetchOrganization = async (): Promise<AxiosResponse<IOrganizationResponse[], any>> => {
  const result = await http.get(`${API_URL}/organization`)
  return result
}
