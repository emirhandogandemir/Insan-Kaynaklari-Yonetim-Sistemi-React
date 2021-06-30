import React ,{useState,useEffect}from 'react'
import { Segment,Grid,Header,Image,Button,Statistic} from 'semantic-ui-react'
import EmployerService from '../../services/employerService'
import JobAdvertService from '../../services/jobAdvertService'
import JobPositionService from '../../services/jobPositionService'
export default function Home() {

const [jobAdvertCount, setjobAdvertCount] = useState(0)

const [employerCount,setEmployerCount] = useState(0)

const [jobPositions,setJobPositions] = useState(0)

useEffect(()=>{
  let employerService = new EmployerService()
let jobAdvertService = new JobAdvertService()
let jobPositionService = new JobPositionService();
jobAdvertService.countGetAll().then((result)=>setjobAdvertCount(result.data))
employerService.countGetAll().then((result)=>setEmployerCount(result.data))
jobPositionService.countGetAll().then((result)=>setJobPositions(result.data))
},[])

    return (
        <div>
          
  <Segment style={{  margin:"30px"}} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
         
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Help Companies and Job Seeker 
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible.
              Let us delight your customers and empower your needs... through pure data analytics.
            </p>
            <hr />
            
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Make Software That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
             We help with <mark style={{borderRadius:"10px"}}>sustainable </mark>  softwares
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image  size='huge' src={"../../../assets/elon.jpg"} style={{borderRadius:"30px"}} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button inverted color="red" >Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
        <div style={{textAlign:"center"}}>
        <Statistic color="blue">
    <Statistic.Value>{jobAdvertCount}</Statistic.Value>
    <Statistic.Label>Job Adverts</Statistic.Label>
  </Statistic>
  <Statistic color="red">
    <Statistic.Value>{employerCount}</Statistic.Value>
    <Statistic.Label>Companies</Statistic.Label>
  </Statistic>
  <Statistic>
    <Statistic.Value>{jobPositions}</Statistic.Value>
    <Statistic.Label>Job Positions</Statistic.Label>
  </Statistic>
        </div>
        
      </Grid>
    </Segment>
    <div style={{backgroundColor:"skyblue",boxShadow:"9px 7px 8px 8px #00688b",borderRadius:"30px",margin:"10px"}}>
    <Segment style={{ padding: '0em'}} vertical>
      <Grid celled='internally' columns='equal' >
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src={"../../../assets/admin.jpeg"}  />
           <div style={{textShadow:"#555 5px 5px 5px"}}> <b>DOGANDEMİR</b> Chief Of Project</div>  
            </p>
          
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <hr />
    </Segment>
    </div>
        </div>
 
    )
}
