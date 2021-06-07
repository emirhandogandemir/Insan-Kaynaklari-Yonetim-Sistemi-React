import React from "react";
import { Container, Menu ,Icon,Button} from "semantic-ui-react";
import "./Navi.css";
export default function Navi() {
  return (
    <div>
       <Menu inverted fixed="top" size="large">
        <Container>
          <Menu.Item name="building outline">
            <Icon name="building outline" size="large"/>
            Hrms
          </Menu.Item>
          <Menu.Item name="Home" />
          <Menu.Item name="Job Advert" />
          <Menu.Item name="Companies" />
          <Menu.Menu position="right">

            <Menu.Item>
              <Button.Group>
                <Button primary>Sign Up</Button>
                <Button.Or />
                <Button positive>Sign In</Button>
              </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
