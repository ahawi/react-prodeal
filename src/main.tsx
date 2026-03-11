import {createRoot} from 'react-dom/client'
import '@/app/styles/index.scss'
import {RouterProvider} from 'react-router'
import {router} from './app/router/router.ts'

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
