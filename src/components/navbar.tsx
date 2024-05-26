
import { Avatar, Dropdown, Navbar as FlowbiteNavbar } from "flowbite-react";


export function Navbar({ userEmail }) {

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
          <Dropdown.Item>Account</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
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

