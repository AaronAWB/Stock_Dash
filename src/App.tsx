import { Routes, Route } from 'react-router-dom'
import { Signin, Signup, Dashboard, Account} from './components/pages/index'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/protectedRoute'

function App() {
  
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path='/account' element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        } />
      </Routes>
    </AuthContextProvider>
      
  )
}

export default App
