import React,{useState,useEffect} from 'react'

import { Table, Label, Icon, Button } from "semantic-ui-react";
import JobAdvertService from '../../../services/jobAdvertService'

export default function AdminJobAdvertList() {

const [jobAdverts, setJobAdverts] = useState([])

useEffect(()=>{
let jobAdvertService = new JobAdvertService();
jobAdvertService.getAllActiveFalseAndOpenTrueJobAdverts().then((result)=>setJobAdverts(result.data.data))

},[jobAdverts])

let changeIsActiveByEmployee = (id)=> {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.changeActiveStatus(id);
  
}

    return (
        <div>
    
      <Table>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Şekli</Table.HeaderCell>
            <Table.HeaderCell>İş Tipi</Table.HeaderCell>
            <Table.HeaderCell>Maaş Miktarı</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell> Admin tarafından onay durumu</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Onay </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
       

        <Table.Body>
        {jobAdverts.map((jobAdvert,key)=>(

        <Table.Row key={key}>
                <Table.HeaderCell collapsing>
                {jobAdvert.employer.companyName}
              </Table.HeaderCell>
              <Table.Cell>{jobAdvert.city.name}</Table.Cell>
              <Table.Cell>{jobAdvert.jobPosition.jobTitle}</Table.Cell>
              <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
              <Table.Cell>{jobAdvert.workType.workType}</Table.Cell>
              <Table.Cell>{jobAdvert.workHour.workHour}</Table.Cell>
              <Table.Cell>{jobAdvert.salaryMin}-{jobAdvert.salaryMax}</Table.Cell>
              <Table.Cell>{jobAdvert.deadline}</Table.Cell>
              <Table.Cell>{jobAdvert.description}</Table.Cell>
            {jobAdvert.active ? (
                <Table.Cell>
                  <Label color="green" style={{ width: "100%" }}>
                    Aktif
                  </Label>
                </Table.Cell>
            ) :(
                <Table.Cell>
                  <Label color="orange" style={{ width: "100%" }}>
                    Pasif
                  </Label>
                </Table.Cell>
              )}

<Table.Cell collapsing>
                <Button
                  onClick={() => changeIsActiveByEmployee(jobAdvert.id)}
                  color="green"
                  icon
                  labelPosition="left"
                >
                  <Icon name="checkmark" size="large" />
                  Değiştir
                </Button>
              </Table.Cell>
        </Table.Row>


        ))}
        </Table.Body>
        </Table>
        </div>
    );
}
