import { API_URL, http } from "."
// axios 사용 숨기기
import { AxiosResponse } from "axios"
export interface IDailyResponse {
  id: string
  status: "ing" // 진행중, etc
  label: string
}

export type MemberIdType = string
export interface IMember {
  id: MemberIdType
  name: string
}
export const fetchDaily = async (): Promise<AxiosResponse<IDailyResponse[], any>> => {
  const result = await http.get(`${API_URL}/daily`)
  return result
}
