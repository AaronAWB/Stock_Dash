
import { Avatar, Dropdown, Navbar as FlowbiteNavbar } from "flowbite-react";


export function Navbar({ userEmail }) {

  return (
    <FlowbiteNavbar fluid rounded className='border-b shadow-sm'>
      <div>
        <ul>
            <li>Dashboard</li>
        </ul>
      </div>
      <div className="ml-auto">
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
          <Dropdown.Item>Account</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <div className="border-t my-1"></div>
          <Dropdown.Item className=' mt-1'>Sign out</Dropdown.Item>
        </Dropdown>
        <FlowbiteNavbar.Toggle />
      </div>
      <FlowbiteNavbar.Collapse>
        <FlowbiteNavbar.Link href="#" active>
          Home
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="#">About</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="#">Services</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="#">Pricing</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="#">Contact</FlowbiteNavbar.Link>
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>
  );
}

