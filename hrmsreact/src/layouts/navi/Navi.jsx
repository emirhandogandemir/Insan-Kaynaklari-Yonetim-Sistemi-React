import React ,{useState}from "react";
import { Container, Menu ,Image} from "semantic-ui-react";
import "./Navi.css";
import SignOut from "../SıgnOut/SignOut";
import SignedIn from "../SıgnedIn/SignedIn";
import { useHistory } from "react-router";
import JobPostButton from "../advertButton/JobPostButton";
export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const history= useHistory()


function handleSignOut(){
  setIsAuthenticated(false)
  history.push("/")

}

function handleSıgnIn(){
  setIsAuthenticated(true)
}
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
     <JobPostButton/>

          {isAuthenticated ? <SignedIn signOut={handleSignOut} />:<SignOut signIn={handleSıgnIn}/>}
           
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
