import React , { useEffect, useState }from 'react'
import JobSeekerService from '../services/jobSeekerService'
import {  Table, Header } from "semantic-ui-react";
export default function JobSeeker() {
   
   const [jobSeekers, setJobSeekers] = useState([])
   
   useEffect(()=>{
       let jobSeekerService= new JobSeekerService();
       jobSeekerService.getJobSeekers().then(result=>setJobSeekers(result.data.data))
   })
   
    return (
        <div>
             <Header as="h2">
        Job Seekers
        <Header.Subheader>
          Aşağıda sistemimizde olan iş arayanları görmektesiniz
        </Header.Subheader>
      </Header>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>SoyAdı</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>DoğumGünü</Table.HeaderCell> 
            <Table.HeaderCell>Aktiflik durumu</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker) => (
            <Table.Row key={jobSeeker.id}>
              <Table.Cell>{jobSeeker.firstName}</Table.Cell>
              <Table.Cell>{jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{jobSeeker.email}</Table.Cell>
              <Table.Cell>{jobSeeker.dateOfBirth}</Table.Cell>
              <Table.Cell>{jobSeeker.active}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer></Table.Footer>
      </Table>
        </div>
    )
}
