
import { Avatar, Dropdown, Navbar as FlowbiteNavbar } from "flowbite-react";


export function Navbar({ userEmail }) {

  return (
    <FlowbiteNavbar fluid rounded className='border-b shadow-sm'>
      <div className="flex items-center w-full">
        <FlowbiteNavbar.Collapse className="hidden md:flex">
          <FlowbiteNavbar.Link href="#" active>
            Home
          </FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link href="/dashboard">Dashboard</FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link href="/search">Search</FlowbiteNavbar.Link>
          <FlowbiteNavbar.Link href="/trades">Trade History</FlowbiteNavbar.Link>
        </FlowbiteNavbar.Collapse>
        <div className="ml-auto flex items-center mr-2">
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
            <div className="border-t my-1"></div>
            <Dropdown.Item className=' mt-1'>Sign out</Dropdown.Item>
          </Dropdown>
          <FlowbiteNavbar.Toggle className="ml-2" />
        </div>
      </div>
      <FlowbiteNavbar.Collapse className="md:hidden">
        <FlowbiteNavbar.Link href="#" active>
          Home
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="/dashboard">Dashboard</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="/search">Search</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="/trades">Trade History</FlowbiteNavbar.Link>
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>

  );
}

