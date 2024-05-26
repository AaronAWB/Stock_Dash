
import { Avatar, Dropdown, Navbar as FlowbiteNavbar } from "flowbite-react";
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


export function Navbar({ userEmail }) {

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
    <FlowbiteNavbar fluid className='border-b'>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Aaron Brinckerhoff</span>
            <span className="block truncate text-sm font-medium">{userEmail}</span>
          </Dropdown.Header>
          <Dropdown.Item as="a" href="/account">Account</Dropdown.Item>
          <Dropdown.Item as="a" href="/settings">Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
        </Dropdown>
        <FlowbiteNavbar.Toggle />
      </div>
      <FlowbiteNavbar.Collapse>
        <FlowbiteNavbar.Link href="#" active>
          Dashboard
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="#">Search</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="#">Trade History</FlowbiteNavbar.Link>
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>

  );
}

