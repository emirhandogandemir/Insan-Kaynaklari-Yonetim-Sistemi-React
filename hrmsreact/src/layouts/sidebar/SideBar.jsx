import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import "./SideBar.css";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div>
      <div>
        <Menu  icon="labeled" vertical style={{marginLeft:"20px"}}>
          <Link to="/jobpositions">
            <Menu.Item as="a">
              <Icon circular inverted color="black" name="briefcase" />
              Job Positions
            </Menu.Item>
          </Link>
          <Link to="/jobseekers">
            <Menu.Item as="a">
              <Icon circular inverted color="black" name="user circle" />
              JobSeeker
            </Menu.Item>
          </Link>
          <Link to="/employers">
            <Menu.Item as="a">
              <Icon circular inverted color="black" name="users" />
              Employers
            </Menu.Item>
          </Link>
          <Link to="/jobadverts">
            <Menu.Item as="a">
              <Icon circular inverted color="black" name="laptop" />
              İş arayanlar için iş ilanları
            </Menu.Item>
          </Link>
          <Link to="/employerjobadvertlist">
            <Menu.Item as="a">
              <Icon circular inverted color="black" name="briefcase" />
              İş verenler için iş ilanı düzenleme
            </Menu.Item>
          </Link>

          <Menu.Item as="a">
            <Icon name="" />
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="" />
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
