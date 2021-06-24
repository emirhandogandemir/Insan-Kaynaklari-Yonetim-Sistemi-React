import React ,{useState}from "react";
import { Container, Menu ,Image} from "semantic-ui-react";
import "./Navi.css";
import SignOut from "../SıgnOut/SignOut";
import SignedIn from "../SıgnedIn/SignedIn";
import { useHistory } from "react-router";
import JobPostButton from "../advertButton/JobPostButton";
import { useSelector } from "react-redux";
import FavoriteSummary from "../favoriteSummary/FavoriteSummary";
export default function Navi() {

  const {favoriteItems} = useSelector(state=>state.favorite)

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
          <Menu.Item name="Job Advert" />
          <Menu.Item name="Companies" />
          <Menu.Menu position="right">
     <JobPostButton/>
{favoriteItems.length>0 && <FavoriteSummary/>}
          {isAuthenticated ? <SignedIn signOut={handleSignOut} />:<SignOut signIn={handleSıgnIn}/>}
           
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
