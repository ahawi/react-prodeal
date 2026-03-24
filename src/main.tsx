import { createRoot } from 'react-dom/client'
import '@/app/styles/index.scss'
import { RouterProvider } from 'react-router'
import { router } from './app/router/router.ts'
import { Provider } from 'react-redux'
import { store } from './app/store/store.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
