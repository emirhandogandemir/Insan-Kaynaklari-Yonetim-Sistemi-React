import React from "react";
import { Container, Menu ,Icon,Button,Image} from "semantic-ui-react";
import "./Navi.css";
export default function Navi() {
  return (
    <div>
       <Menu inverted fixed="top" size="large">
        <Container>
          <Menu.Item name="building outline">
          <Image size='mini' circular src={"../assets/hrmslogo.jpg"} style={{ marginRight: '1.5em' }} />
            Hrms
          </Menu.Item>
          <Menu.Item name="Home" />
          <Menu.Item name="Job Advert" />
          <Menu.Item name="Companies" />
          <Menu.Item name="Cities" />
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
