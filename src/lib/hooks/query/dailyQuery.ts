import { useMutation, useQuery, useQueryClient } from "react-query"
import { createJob, fetchDaily } from "@lib/api/dailyApi"

function getDailyQueryKey() {
  return ["daily"]
}
export function useDaily() {
  const queryKey = getDailyQueryKey()
  const { data, isLoading } = useQuery(queryKey, async () => {
    const { data } = await fetchDaily()
    return data
  })
  return { data, isLoading }
}

interface IUseDailyMutationRequest {
  label: string
}

export function useDailyMutation() {
  const queryClient = useQueryClient()
  return useMutation(
    ({ label }: IUseDailyMutationRequest) => {
      return createJob({ label })
    },
    {
      onSuccess: () => {
        // 해당 key를 가지는 query 재실행
        const dailyQueryKey = getDailyQueryKey()
        queryClient.invalidateQueries(dailyQueryKey)
      },
    }
  )
}
