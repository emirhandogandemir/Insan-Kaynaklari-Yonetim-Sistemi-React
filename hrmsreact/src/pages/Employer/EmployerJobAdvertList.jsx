import React,{useState,useEffect} from 'react'
import JobAdvertService from '../../services/jobAdvertService'
import { Table, Label , Icon, Button} from "semantic-ui-react";
export default function EmployerJobAdvertList() {
    const [jobAdverts, setJobAdverts] = useState([])
     

useEffect (()=>{
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getAllByEmployerId(11)// fake id verildi yine çünkü authorization yok
    .then((result)=>setJobAdverts(result.data.data))
},[jobAdverts])

let changeIsOpenByEmployer = (id)=> {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.changeOpenStatus(id);
   
}

    
    return (
        <div>
            <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan="2">Şehir</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Pozisyon</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Açık Pozisyon</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Çalışma Şekli</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">İş Tipi</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Maaş Miktarı</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Açıklama</Table.HeaderCell>
            <Table.HeaderCell colSpan="3" textAlign="center"> Durum</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Sizin Tarafınızdan</Table.HeaderCell>
            <Table.HeaderCell>Admin Tarafından</Table.HeaderCell>
            <Table.HeaderCell rowSpan="3">İlanın Durumunu değiştir</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdvert, key) => (
            <Table.Row key={key}>
              <Table.Cell>{jobAdvert.city.name}</Table.Cell>
              <Table.Cell>{jobAdvert.jobPosition.jobTitle}</Table.Cell>
              <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
              <Table.Cell>{jobAdvert.workType.workType}</Table.Cell>
              <Table.Cell>{jobAdvert.workHour.workHour}</Table.Cell>
              <Table.Cell>
                {jobAdvert.salaryMin} ₺ - {jobAdvert.salaryMax} ₺
              </Table.Cell>
              <Table.Cell>{jobAdvert.deadline}</Table.Cell>
              <Table.Cell>{jobAdvert.description}</Table.Cell>
              {jobAdvert.open ? (
                <Table.Cell>
                  <Label color="green" style={{ width: "100%" }}>
                    İş ilanı Açık
                  </Label>
                </Table.Cell>
              ) : (
                <Table.Cell>
                  <Label color="red" style={{ width: "100%" }}>
                    İş ilanı Kapalı
                  </Label>
                </Table.Cell>
              )}
              {jobAdvert.active ? (
                <Table.Cell>
                  <Label color="green" style={{ width: "100%" }}>
                    Admin tarafından onaylı
                  </Label>
                </Table.Cell>
              ) : (
                <Table.Cell>
                  <Label color="orange" style={{ width: "100%" }}>
                    Admin tarafından hala pasif
                  </Label>
                </Table.Cell>
              )}
              <Table.Cell collapsing>
                <Button
                  onClick={() => changeIsOpenByEmployer(jobAdvert.id)}
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
    )
}
