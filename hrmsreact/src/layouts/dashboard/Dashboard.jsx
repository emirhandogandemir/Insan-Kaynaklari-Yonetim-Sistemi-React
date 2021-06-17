import React from "react";
import JobPositionList from "../../pages/JobPositionList";
import { Grid, GridColumn, GridRow, Icon } from "semantic-ui-react";
import Home from "../homepage/Home";
import SideBar from "../sidebar/SideBar";
import JobAdvertList from "../../pages/JobAdvertList";
import JobSeeker from "../../pages/JobSeekerList";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import JobSeekerDetail from "../../pages/JobSeekerDetail";
import EmployerList from "../../pages/EmployerList";
import JobAdvertAdd from "../../pages/JobAdvertAdd";
import AdminJobAdvertList from "../../pages/Admin/JobAdverts/AdminJobAdvertList";
import EmployerJobAdvertList from "../../pages/Employer/EmployerJobAdvertList";
import JobAdvertDetail from "../../pages/JobAdvertDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={3}>
            <SideBar />
          </GridColumn>
          <GridColumn width={12}>
            <Route exact path="/" component={Home} />
            <Route exact path="/jobseekers" component={JobSeeker} />
            <Route path="/jobseekers/:id" component={JobSeekerDetail} />
            <Route exact path="/jobadverts" component={JobAdvertList} />
            <Route path="/jobadverts/:id" component={JobAdvertDetail}></Route>
            <Route exact path="/jobpositions" component={JobPositionList} />
            <Route path="/employers" component={EmployerList} />
            <Route path="/jobadvertadd" component={JobAdvertAdd} />

            <Route path="/adminjobadvertlist" component={AdminJobAdvertList} />
            <Route
              path="/employerjobadvertlist"
              component={EmployerJobAdvertList}
            />
          </GridColumn>
          <GridColumn width={1}>
            <div style={{ position: "fixed" }}>
              <Link to="/"> 
               <Icon.Group size="huge">
                <Icon loading color="blue" size="big" name="circle notch" />
                <Icon name="home" />
              </Icon.Group>
              </Link>
            
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
