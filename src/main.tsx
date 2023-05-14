import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { RouterProvider } from "react-router"
import { QueryClient, QueryClientProvider } from "react-query"
import "primereact/resources/themes/lara-light-indigo/theme.css" // theme
import "primereact/resources/primereact.css" // core css
import "primeicons/primeicons.css" // icons
import "primeflex/primeflex.css"
import { router } from "./routes"

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
