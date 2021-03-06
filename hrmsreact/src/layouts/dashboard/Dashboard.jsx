import React, { useEffect, useState } from "react";
import JobPositionList from "../../pages/JobPositionList";
import { Grid, GridColumn, GridRow, Icon } from "semantic-ui-react";
import Home from "../homepage/Home";
import SideBar from "../sidebar/SideBar";
import JobAdvertList from "../../pages/JobAdvertList";
import JobSeekerList from "../../pages/JobSeekerList";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import JobSeekerDetail from "../../pages/JobSeekerDetail";
import EmployerList from "../../pages/EmployerList";
import JobAdvertAdd from "../../pages/JobAdvertAdd";
import AdminJobAdvertList from "../../pages/Admin/JobAdverts/AdminJobAdvertList";
import EmployerJobAdvertList from "../../pages/Employer/EmployerJobAdvertList";
import JobAdvertDetail from "../../pages/JobAdvertDetail";
import EmployerDetail from "../../pages/EmployerDetail";
import EmployeeDetail from "../../pages/Employee/EmployeeDetail";
import AdminAllEmployersVerifyFalse from "../../pages/Admin/Employers/AdminAllEmployersVerifyFalse";
import favoriteAction from "../../store/actions/favoriteAction"
import JobAdvertService from "../../services/jobAdvertService";
import JobSeekerCv from "../../pages/JobSeekerCv";
import AdminPanel from "../../pages/Admin/AdminPanel";
import ActiveEmployer from "../../pages/Employer/ActiveEmployer";
import AdminEmployers from "../../pages/Admin/Employers/AdminEmployers";
import AdminAllEmployers from "../../pages/Admin/Employers/AdminAllEmployers";
export default function Dashboard() {
  return (
 
      <Grid>
        <GridRow>
          <GridColumn width={3}>
            <SideBar />
          </GridColumn>
          <GridColumn width={11}>
            <Route exact path="/" component={Home} />
            <Route exact path="/jobseekers" component={JobSeekerList} />
            <Route path="/jobseekers/:id" component={JobSeekerDetail} />
            <Route exact path="/jobadverts">
              {" "}
              <JobAdvertList> </JobAdvertList>{" "}
            </Route>
            <Route path="/jobadverts/:id" component={JobAdvertDetail}></Route>
            <Route exact path="/jobpositions" component={JobPositionList} />
            <Route exact path="/employers" component={EmployerList} />
            <Route path="/employers/:id" component={EmployerDetail} />
            <Route path="/jobadvertadd" component={JobAdvertAdd} />
            <Route path="/jobseekercv" component={JobSeekerCv} />
            <Route path="/employees" component={EmployeeDetail} />
            
            <Route path="/activeemployer" component={ActiveEmployer} />
            <Route path="/employerjobadvertlist" component={EmployerJobAdvertList}/>
            <Route path="/adminpanel" component={AdminPanel}/>
            <Route path="/adminjobadvertlist" component={AdminJobAdvertList}/>
            <Route path="/adminemployer" component={AdminEmployers} />
            <Route path="/adminallemployers" component={AdminAllEmployers}/>
            <Route path="/adminallemployersverifyfalse" component={AdminAllEmployersVerifyFalse}/>
          </GridColumn>
          <GridColumn width={2}>
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
  );
}
