import React from 'react'
import { Segment,Grid,Header,Image,Button} from 'semantic-ui-react'
export default function Home() {
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
