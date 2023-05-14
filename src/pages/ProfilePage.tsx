import React from "react"
import { useParams } from "react-router"

function ProfilePage() {
  const { memberId } = useParams()
  return <div>{memberId}</div>
}

export default ProfilePage
