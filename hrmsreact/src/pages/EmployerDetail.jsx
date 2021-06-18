import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router'
import EmployerService from '../services/employerService';
import { Card, Icon, Image } from 'semantic-ui-react'

export default function EmployerDetail() {

let {id}  = useParams();

const [employer, setEmployer] = useState({})


useEffect(()=>{
let employerService = new EmployerService()
employerService.getById(id).then((result)=>setEmployer(result.data.data))
})
    return (
        <div>
            <Card >
                <div >
    <Image src={"../../assets/company.jpg"} size="medium"  />
    </div>
    <Card.Content>
      <Card.Header> <h3>{ employer.companyName}</h3></Card.Header>
      <Card.Meta>Şirket Maili { employer.companyName}</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
     
        <Icon name='building' />
    </Card.Content>
  </Card>
        </div>
    )
}
