import React,{useState,useEffect} from 'react'
import { useParams } from "react-router";
import { Button, Card, Image } from "semantic-ui-react";
import JobSeekerService from '../services/jobSeekerService';
export default function JobSeekerDetail() {
   
   let {id} =useParams();// parametreleri obje olarak veriyor useParams

   const[jobSeeker,setJobSeeker] = useState({})
   
useEffect(()=>{

let jobSeekerService = new JobSeekerService();
jobSeekerService.getById(id).then((result)=>setJobSeeker(result.data.data))

},[])
console.log(jobSeeker)
    return (
        <div>
            <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/jenny.jpg"
            />
            <Card.Header>{jobSeeker.firstName}</Card.Header>
            <Card.Meta>{jobSeeker.lastName}</Card.Meta>
            <Card.Description>
              {jobSeeker.firstName} requested permission to view your contact details
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
        </div>
    )
}
