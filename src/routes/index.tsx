/* eslint-disable prettier/prettier */
// 외부모듈
import { createBrowserRouter } from "react-router-dom"
import App from "App"
import MainPage from "@pages/MainPage"
import ProfilePage from "@pages/ProfilePage"
import LoginPage from "@pages/LoginPage"

export const ROOT_PATH = "/"

export const LOGIN_PATH = "/login"
export const MAIN_PATH = "/main"
export const PROFILE_PATH = "/profile"
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
    path: `${LOGIN_PATH}`,
    element: <LoginPage />,
  },
  {
    path: `${PROFILE_PATH}${MEMBER_DYNAMIC_PATH}`,
    element: <ProfilePage />,
  },
])
