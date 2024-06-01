import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'
function ProtectedRoute({ children }: any) {

  const { user } = UserAuth();
  const navigate = useNavigate();

  if (!user) return navigate('/login');

  return children;
}

export default ProtectedRoute;