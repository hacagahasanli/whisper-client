import App from './App'
import router from './routes'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider {...{ router }}>
    <App />
  </RouterProvider>
)
