import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import "primereact/resources/themes/lara-light-indigo/theme.css" // theme
import "primereact/resources/primereact.css" // core css
import "primeicons/primeicons.css" // icons
import "primeflex/primeflex.css"
import store from "@store/index"
import { router } from "./routes"
import MainContainer from "@container/MainContainer"

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Main />)

function Main() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <MainContainer />
        </QueryClientProvider>
      </Provider>
    </React.StrictMode>
  )
}
