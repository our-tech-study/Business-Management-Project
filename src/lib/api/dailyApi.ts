import { API_URL, http } from "."
// axios 사용 숨기기
import { AxiosResponse } from "axios"

type JobStatusType = "ing" | "pause" | "stop"
export interface IDailyResponse {
  id: string
  status: JobStatusType
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

export const createJob = async ({ label }): Promise<AxiosResponse<IDailyResponse[], any>> => {
  const result = await http.post(`${API_URL}/daily`, {
    // @TODO id의 경우 server에서 채번
    id: `${Math.floor(Math.random() * 100000000)}`,
    status: "stop",
    label: label,
  })
  return result
}
