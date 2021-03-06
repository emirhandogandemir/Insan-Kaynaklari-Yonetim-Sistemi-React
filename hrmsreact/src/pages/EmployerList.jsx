import React,{useState,useEffect}from 'react'
import EmployerService from "../services/employerService"
import { Table, Header ,Button} from "semantic-ui-react";
import { Link } from 'react-router-dom';
export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(()=>{
        let employerService = new EmployerService();
        employerService.getEmployers().then(result=>setEmployers(result.data.data))
    },[])

    return (
        <div>
            <Header as="h2">
        Companies
        <Header.Subheader>
          Aşağıda sistemimizde olan iş veren şirketleri görmektesiniz 
        </Header.Subheader>
      </Header>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row key={employer.id}>
              <Table.Cell> <h3>{employer.companyName}</h3></Table.Cell>
              <Table.Cell> <Link to={`/employers/${employer.id}`}><Button color='grey'>Details</Button></Link></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer></Table.Footer>
      </Table>
        </div>
    )
}
