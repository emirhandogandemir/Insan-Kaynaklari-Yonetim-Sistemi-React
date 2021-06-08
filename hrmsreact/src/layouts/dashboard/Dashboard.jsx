import React from "react";
import JobPositionList from "../../pages/JobPositionList"
import { Grid, GridColumn, GridRow } from "semantic-ui-react";

import SideBar from "../sidebar/SideBar";
import JobAdvertList from "../../pages/JobAdvertList";
import JobSeeker from "../../pages/JobSeekerList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
           <SideBar/>
          </GridColumn>
          <GridColumn width={12}>
       <JobAdvertList/>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
