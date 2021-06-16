import React from "react";
import JobPositionList from "../../pages/JobPositionList";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import Home from "../homepage/Home";
import SideBar from "../sidebar/SideBar";
import JobAdvertList from "../../pages/JobAdvertList";
import JobSeeker from "../../pages/JobSeekerList";
import { Route } from "react-router";
import JobSeekerDetail from "../../pages/JobSeekerDetail";
import EmployerList from "../../pages/EmployerList";
import JobAdvertAdd from "../../pages/JobAdvertAdd";
import AdminJobAdvertList from "../../pages/Admin/JobAdverts/AdminJobAdvertList";
import EmployerJobAdvertList from "../../pages/Employer/EmployerJobAdvertList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <SideBar />
          </GridColumn>
          <GridColumn width={12}>
            <Route exact path="/" component={Home} />
            <Route exact path="/jobseekers" component={JobSeeker} />
            <Route path="/jobseekers/:id" component={JobSeekerDetail}/>
            <Route exact path="/jobadverts" component={JobAdvertList} />
            <Route exact path="/jobpositions" component={JobPositionList} />
            <Route path ="/employers" component={EmployerList}/>
            <Route path="/jobadvertadd" component ={JobAdvertAdd}/>
            <Route path="/adminjobadvertlist" component={AdminJobAdvertList}/>
            <Route path="/employerjobadvertlist" component={EmployerJobAdvertList}/>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
