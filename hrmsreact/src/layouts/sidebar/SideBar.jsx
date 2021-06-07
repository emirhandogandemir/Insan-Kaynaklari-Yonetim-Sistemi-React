import React from "react";
import { Icon, Menu} from "semantic-ui-react";
import './SideBar.css'
export default function SideBar() {
  return (
    <div>
    <Menu inverted icon="labeled" vertical>
    <Menu.Item as="a">
          <Icon name="briefcase" />
          Job Positions
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="user circle" />
          JobSeeker
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="user circle" />
          Employeer
        </Menu.Item>


    </Menu>
      
     
    </div>
  );
}
