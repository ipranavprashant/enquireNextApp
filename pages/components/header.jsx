// ./components/SiteHeader.jsx
import { Avatar, Button, Dropdown, Navbar, Text } from "@nextui-org/react";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import EnquireLogo from "./logo";
const SiteHeader = () => {
  return (
    <Navbar variant="sticky" isBordered>
      <Navbar.Brand>
         <EnquireLogo/>
            <Text weight="bold">Enquire NITC</Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Link>
          <Button as={Link} href="/cart" auto css={{ padding: "$4" }} light>
            <Text weight="bold">Home</Text>
          </Button>
          <Button as={Link} href="/cart" auto css={{ padding: "$4" }} light>
            <Text weight="bold">Events</Text>
          </Button>
          <Button as={Link} href="/cart" auto css={{ padding: "$4" }} light>
            <Text weight="bold">Gallery</Text>
          </Button>
          <Dropdown auto css = {{ padding: "$4"}}>
            <Dropdown.Trigger>
              <Button auto css={{ padding: "$4" }} light>
                <Text weight="bold">People</Text>
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Menu>
              <Dropdown.Item key="Profile">Members</Dropdown.Item>
              <Dropdown.Item key="Orders">Alumni</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button as={Link} href="/about" auto css={{ padding: "$2" }} light>
            <Text weight="bold">About Us</Text>
          </Button>
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};
export default SiteHeader;