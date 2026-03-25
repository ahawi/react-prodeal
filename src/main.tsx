import { createRoot } from 'react-dom/client'
import '@/app/styles/index.scss'
import { Provider } from 'react-redux'
import { store } from './app/store/store.ts'
import App from './app/App'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
