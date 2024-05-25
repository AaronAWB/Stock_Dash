import { UserAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


function Account() {
    const { user, logOut } = UserAuth()

    const navigate = useNavigate()

    const handleLogout = async () => {
      try {
        await logOut()
        navigate('/')
        console.log('You are logged out.')
      } catch (error: any) {
        console.log(error.message)
      }
    }

    return (
        <div className='max-w-[80%] mx-auto my-16 p-4'>
          <h1 className='text-2xl font-bold py-4'>Account</h1>
          <p>User Email: {user && user.email}</p>
          <button className='border order-orange-500 bg-orange-600 hover:bg-orange-500 text-white cursor-pointer px-6 py-2 my-4' onClick={handleLogout}>
            Logout
          </button>
        </div>
    );
};

export default Account