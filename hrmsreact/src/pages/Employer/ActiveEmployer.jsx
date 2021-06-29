import React, { useState, useEffect } from "react";
import EmployerService from "../../services/employerService";
import { Card, Icon, Button, Grid } from "semantic-ui-react";
import ActiveEmployerUpdate from "./ActiveEmployerUpdate";
export default function ActiveEmployer() {
  const [employer, setEmployer] = useState(null);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getById(20).then((result) => setEmployer(result.data.data));
  }, []);
  return (
    <div style={{ marginLeft: "200px", marginRight: "200px" }}>
      <Grid>
        <Card fluid>
          <Card.Content>
            <Card.Header>{employer?.companyName}</Card.Header>
            <Card.Meta>
              <span className="date">{employer?.email}</span>
            </Card.Meta>
            <Card.Description>{employer?.website}</Card.Description>
            <Card.Description>{employer?.phoneNumber}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
            <ActiveEmployerUpdate employer={employer}></ActiveEmployerUpdate>
          </Card.Content>
          <Button></Button>
        </Card>
      </Grid>
    </div>
  );
}
