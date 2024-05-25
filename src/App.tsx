import { Routes, Route } from 'react-router-dom'
import { Signin, Signup, Dashboard, Account} from './components/pages/index'
import { AuthContextProvider } from './context/AuthContext'

function App() {
  
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </AuthContextProvider>
      
  )
}

export default App
