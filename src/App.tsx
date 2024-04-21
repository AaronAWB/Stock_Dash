import { Routes, Route } from 'react-router-dom'
import { Signin, Signup, Dashboard, Account} from './components/pages/index'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/account' element={<Account />} />
    </Routes>
  )
}

export default App
