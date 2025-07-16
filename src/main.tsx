import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App"
import "./index.css"

const container = document.getElementById("root")
if (!container) {
  throw new Error('Root element not found. Make sure there is a div with id="root" in your HTML.')
}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
