import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src={"assets/jobseeker.jpg"} />
        <Dropdown pointing="top left" text="Emirhan">
          <Dropdown.Menu>
            <Dropdown.Item as={NavLink} to="/employees" text="Bilgilerim" icon="info" />
        <Dropdown.Item as={NavLink} to="/adminpanel" text="Paneli Yönet" icon="info" /> 
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
