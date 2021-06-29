import React from 'react'
import { Card, Icon, Image,Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
export default function AdminPanel() {
    return (
        <div>

<Grid columns="3">
<Grid.Row>
<Grid.Column>
    <Link to="/adminjobadvertlist">
    <Card >
    <Image src={"../../../assets/jobadvert.jpg"} wrapped ui={false} />
    <Card.Content>
      <Card.Header>İş ilanları</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Sistemdeki iş ilanlarının durumunu gözlemleyebilirsiniz
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
    
    </Link>


</Grid.Column>

<Grid.Column>
    <Link to="/adminemployer">

    <Card>
    <Image src={"../../../assets/employer.jpg"} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Şirketleri</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
    </Link>

</Grid.Column>

</Grid.Row>

</Grid>


         
  
        </div>
    )
}
