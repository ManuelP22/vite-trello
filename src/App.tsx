import {Route, Routes } from 'react-router-dom'
import { Home, Presentation } from './Pages'
import IndexLayout from './layout'
import MainLayout from './components/MainLayout/MainLayout'

function App() {

  return (
    <Routes>

      {/*Outside Routes*/}
      <Route element={<IndexLayout />}>
        <Route index element={<Presentation />}/>
      </Route>
      
      {/* Protected Routes */}
      <Route element={<MainLayout />}>
        <Route element={<Home />} path='/home'/>
      </Route>
    </Routes>
  )
}

export default App
