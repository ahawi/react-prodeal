import {Route, Routes} from 'react-router'
import MainPage from '@/pages/main/ui'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}></Route>
    </Routes>
  )
}

export default App
