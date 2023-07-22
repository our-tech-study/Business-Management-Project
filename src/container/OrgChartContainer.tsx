import OrgChart from "@components/OrgChart"
import { MemberIdType } from "@lib/api/orgApi"
import { useOrganization } from "@lib/hooks/query/organizationQuery"
import { PROFILE_PATH } from "@routes/index"
import { useNavigate } from "react-router-dom"

export default function OrgChartContainer() {
  const { data, isLoading } = useOrganization()
  const navigate = useNavigate()

  if (!data || isLoading) {
    return null
  }

  const onSelectProfile = (memberId: MemberIdType) => {
    navigate(`${PROFILE_PATH}/${memberId}`)
  }
  const onSelectSchedule = (memberId: MemberIdType) => {}
  const onSelectPersonnelEvaluationByMember = (memberId: MemberIdType) => {}
  const onSelectPersonnelEvaluationByLeader = (memberId: MemberIdType) => {}

  return (
    <OrgChart
      data={data}
      onSelectProfile={onSelectProfile}
      onSelectSchedule={onSelectSchedule}
      onSelectPersonnelEvaluationByLeader={onSelectPersonnelEvaluationByLeader}
      onSelectPersonnelEvaluationByMember={onSelectPersonnelEvaluationByMember}
    />
  )
}
