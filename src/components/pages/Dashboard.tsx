import { Navbar} from "../navbar";
import { UserAuth } from '../../context/AuthContext'

export default function Dashboard() {

  const { user } = UserAuth()

  return (
    <Navbar userEmail={user.email}/>
  )
}