import { API_URL, http } from "."
// axios 사용 숨기기
import { AxiosResponse } from "axios"
export interface ISettingResponse {
  department: string
  leader: ISetting
  members?: ISetting[]
  children?: ISettingResponse[]
}

export type SettingId = string
export interface ISetting {
  id: SettingId
  name: string
}
export const fetchOrganization = async (id): Promise<AxiosResponse<ISettingResponse[], any>> => {
  const result = await http.get(`${API_URL}/setting/${id}`)
  return result
}
