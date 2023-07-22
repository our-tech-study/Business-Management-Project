/* eslint-disable prettier/prettier */
// 외부모듈
import { createBrowserRouter } from "react-router-dom"
import App from "App"
import MainPage from "@pages/MainPage"
import ProfilePage from "@pages/ProfilePage"
import DailyPage from "@pages/DailyPage"
import SettingPage from "@pages/SettingPage"

export const ROOT_PATH = "/"

export const MAIN_PATH = "/main"
export const PROFILE_PATH = "/profile"
export const DAILY_PATH = '/daily'
export const SETTING_PATH = '/settting'
const MEMBER_DYNAMIC_PATH = "/:memberId"
/*
ref: https://reactrouter.com/en/main/routers/create-browser-router
*/
export const router = createBrowserRouter([
  // {
  //   path: ROOT_PATH,
  //   index: true,
  //   element: <App />,
  // },
  {
    path: ROOT_PATH,
    // index: true,
    element: <MainPage />,
  },
  {
    path: `${PROFILE_PATH}${MEMBER_DYNAMIC_PATH}`,
    element: <ProfilePage />,
  },
  {
    path: `${DAILY_PATH}`,
    element: <DailyPage />,
  },
  {
    path: `${SETTING_PATH}${MEMBER_DYNAMIC_PATH}`,
    element: <SettingPage />,
  },
])


