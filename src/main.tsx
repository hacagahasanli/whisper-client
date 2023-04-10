import App from './App'
import router from './routes'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <RouterProvider {...{ router }}>
      <App />
    </RouterProvider>
  </RecoilRoot>
)
