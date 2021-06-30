import React, { useEffect, useState } from "react";
import JobPositionService from "../services/jobPositionService";
import JobAdvertService from "../services/jobAdvertService";
import {  Table, Header ,Button,Grid,Card,Icon,Image} from "semantic-ui-react";
export default function JobPositionList() {
  const [jobPositions, setJobPositions] = useState([]);
  let jobAdvertService = new JobAdvertService() 
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  },[]);

  const countGetById= (id)=>{
jobAdvertService.countByJobPositionId(id);
  }

  return (
    <div>
      <Header as="h2">
        Job Positions
        <Header.Subheader>
          Aşağıda sistemimizde olan iş pozisyonlarını görmektesiniz
        </Header.Subheader>
      </Header>
      {/* <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Başlığı</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPositions.map((jobPosition) => (
            <Table.Row key={jobPosition.id}>
              <Table.Cell>{jobPosition.jobTitle}</Table.Cell>
              <Table.Cell> <Button color='grey'>Details</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer></Table.Footer>
      </Table> */}


<Grid >
        <Grid.Row centered columns="3">

      {jobPositions.map((jobPosition)=>(
     
<Grid.Column>
<Card>
    <Image src={"../../assets/devops.jpg"} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{jobPosition.jobTitle}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
       şu anda bu Pozisyonda olan iş sayısı : 
      </Card.Description>
      <Card.Description>
       iş ilanının sisteme eklenme tarihi : {jobPosition.createdDate}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>

</Grid.Column>


      ))}
     </Grid.Row>
 </Grid>
    </div>
  );
}
