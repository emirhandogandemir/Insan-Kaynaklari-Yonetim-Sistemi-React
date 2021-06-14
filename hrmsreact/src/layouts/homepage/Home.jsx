import React from 'react'
import { Card,Grid} from 'semantic-ui-react'
export default function Home() {
    return (
        <div>
<Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
     
      <Card
    image='../../../assets/elon.jpg'
    header='Uzman'
    meta='işini en iyi yapanlar burada'
    description='Elon bitcoini çabuk artır adamı delirtme'/>
      </Grid.Column>
      <Grid.Column>
      <Card
    image='../../../assets/yenimezun.jpg'
    header='Yeni Mezun'
    meta='işini en iyi yapanlar burada'
    description='Elon bitcoini çabuk artır adamı delirtme'/>
      </Grid.Column>
      <Grid.Column>
      <Card
    image='../../../assets/maviyakalı.jpg'
    header='Mavi Yakalı'
    meta='işini en iyi yapanlar burada'
    description='Elon bitcoini çabuk artır adamı delirtme'/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3}>
      <Grid.Column>
     
      <Card
    image='../../../assets/elon.jpg'
    header='Uzman'
    meta='işini en iyi yapanlar burada'
    description='Elon bitcoini çabuk artır adamı delirtme'/>
      </Grid.Column>
      <Grid.Column>
      <Card
    image='../../../assets/elon.jpg'
    header='Uzman'
    meta='işini en iyi yapanlar burada'
    description='Elon bitcoini çabuk artır adamı delirtme'/>
      </Grid.Column>
      <Grid.Column>
      <Card
    image='../../../assets/elon.jpg'
    header='Uzman'
    meta='işini en iyi yapanlar burada'
    description='Elon bitcoini çabuk artır adamı delirtme'/>
      </Grid.Column>
    </Grid.Row>
    </Grid>

       
        </div>
    )
}
