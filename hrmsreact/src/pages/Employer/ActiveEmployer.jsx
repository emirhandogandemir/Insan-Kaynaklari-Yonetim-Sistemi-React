import React, { useState, useEffect } from "react";
import EmployerService from "../../services/employerService";
import { Card, Icon, Button, Grid,Message } from "semantic-ui-react";
import ActiveEmployerUpdate from "./ActiveEmployerUpdate";
import VerificationEmployerService from "../../services/verificationEmployerService";
export default function ActiveEmployer() {
  const [employer, setEmployer] = useState(null);
  const [verificationEmployer,setVerificationEmployer] =useState(null)
  useEffect(() => {
    let employerService = new EmployerService();
    let verificationEmployerService = new VerificationEmployerService()
    employerService.getById(20).then((result) => setEmployer(result.data.data));
  verificationEmployerService.getById(20).then((result) => setVerificationEmployer(result.data.data));
  }, []);
  console.log(employer)
  console.log(verificationEmployer)
  return (
    <div style={{ marginLeft: "200px", marginRight: "200px" }}>
     
     
      
          {!employer?.verified && (
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
      )}
      {employer?.verified&&(
<Grid>
<Card fluid>
  <Card.Content>

<Card.Header>{verificationEmployer?.companyName}</Card.Header>
<Card.Meta>
<span className="date">{verificationEmployer?.email}</span>
</Card.Meta>
<Card.Description>{verificationEmployer?.website}</Card.Description>
<Card.Description>{verificationEmployer?.phoneNumber}</Card.Description>
</Card.Content>
<Card.Content extra>
<a>
<Icon name="user" />
22 Friends
</a>
<ActiveEmployerUpdate employer={verificationEmployer}></ActiveEmployerUpdate>
</Card.Content>
<Button></Button>
</Card>
</Grid>

      )}
          
    </div>
  );
}
