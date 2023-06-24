import { useQuery } from "react-query"
import { fetchDaily } from "@lib/api/dailyApi"

export function useDaily() {
  const { data, isLoading } = useQuery(["daily"], async () => {
    const { data } = await fetchDaily()
    return data
  })
  return { data, isLoading }
}
