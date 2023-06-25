import { useEffect } from "react"
import { selectAlert } from "@store/selector"
import { useDispatch, useSelector } from "react-redux"
import { Alert, Paper, AlertColor } from "@mui/material"
import { IAlert, hideAlert } from "@store/root"
function MainContainer() {
  const dispatch = useDispatch()
  const alert = useSelector(selectAlert)

  useEffect(() => {
    // 연속 alert show, hide 되는 경우 setTimeout key 들고 있다가 초기화 해주는 작업
    if (alert !== null) {
      setTimeout(() => {
        dispatch(hideAlert())
      }, 1000)
    }
  }, [alert])

  return (
    <>
      {alert && (
        <Alert severity={getAlertSeverityByType(alert.type)} color="info" sx={{ position: "fixed", top: 0, right: 0 }}>
          {alert.description}
        </Alert>
      )}
    </>
  )
}

export default MainContainer

function getAlertSeverityByType(type: IAlert["type"]): AlertColor {
  switch (type) {
    case "warning":
      return "warning"
    case "announcement":
      return "info"
    default:
      return "success"
  }
}
